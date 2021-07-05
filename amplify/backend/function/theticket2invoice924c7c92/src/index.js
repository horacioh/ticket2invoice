var aws = require("aws-sdk")
var ses = new aws.SES({ region: process.env.REGION })
const s3 = new aws.S3()
const mailcomposer = require("nodemailer/lib/mail-composer")

const emailText = `Buenas,

me podrían pasar una factura del ticket adjunto?

mis datos fiscales:
Horacio Herrera
46440742Q
carrer Gran de Gracia 78, 1
08012, Barcelona, España

gracias

_
Horacio Herrera
hi@horacioh.com
`

function getBase64(key) {
  var params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `public/${key}`,
  }
  return s3.getObject(params).promise()
}

function encode(data) {
  let buf = Buffer.from(data.Body)
  let base64 = buf.toString("base64")
  return base64
}

// let thebase = await base64_encode('stuff');

exports.handler = (event) => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2))
  event.Records.forEach((record) => {
    if (record.eventName !== "INSERT") return
    console.log("eventID => ", record.eventID)
    // console.log(record.eventName)
    // console.log("DynamoDB Record: %j", record.dynamodb)
    // console.log("image key = ", record.dynamodb.NewImage.image.S)
    getBase64(record.dynamodb.NewImage.image.S).then((image) => {

      return sendEmail({
        to: record.dynamodb.NewImage.companyEmail.S,
        image: encode(image),
        imageName: record.dynamodb.NewImage.image.S,
      })
    })

    return Promise.resolve("Successfully processed DynamoDB record")
  })
}

function sendEmail({ to, image, imageName }) {
  return new Promise((resolve, reject) => {
    let sendRawEmailPromise

    const mail = new mailcomposer({
      from: "hi@horacioh.com",
      replyTo: "hi@horacioh.com",
      to,
      subject: "Horacio Herrera | Solicitud de Factura",
      text: emailText,
      attachments: [
        {
          filename: `ticket2invoice_${imageName}.png`,
          content: image,
          encoding: "base64",
          // contentType: "image/png",
        },
      ],
    })

    mail.compile().build((err, message) => {
      console.log({ message })
      if (err) {
        reject(`Error sending raw email: ${err}`)
      }

      if (message) {
        sendRawEmailPromise = ses
          .sendRawEmail({ RawMessage: { Data: message } })
          .promise()
      } else {
        reject("message is undefined", err)
      }
    })

    resolve(sendRawEmailPromise)
  })
}