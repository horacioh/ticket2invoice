# ticket2Invoice

## init amplify
## add auth

```bash
→ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource ticket2invoiceapp5acd81e8 locally
```

## add storage

```bash
→ amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: ticket2invoicestorage
? Please provide bucket name: ticket2invoicebucket
? Who should have access: Auth and guest users
? What kind of access do you want for Authenticated users? create/update, read, delete
? What kind of access do you want for Guest users? read
? Do you want to add a Lambda Trigger for your S3 Bucket? No
Auth configuration is required to allow unauthenticated users, but it is not configured properly.
Successfully updated auth resource locally.
Successfully added resource ticket2invoicestorage locally
```
## add api

```bash
→ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: ticket2invoiceapi
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API Yes, I want to make some additional changes.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API API key
API key configuration
? Enter a description for the API key: public
? After how many days from now the API key should expire (1-365): 365
? Enable conflict detection? No
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at /Users/horacio/workspace/ticket2invoice/amplify/backend/api/ticket2invoiceapi/schema.graphql or place .graphql files in a directory at /Users/horacio/workspace/ticket2invoice/amplify/backend/api/ticket2invoiceapi/schema
? Do you want to edit the schema now? Yes
```

## add lambda trigger (function)

### ⚠️ THIS DOES NOT WORK WITH THIS FUNCTION CONFIG. YOU NEED TO CREATE A DEFAULT LAMBDA TRIGGER AND ADD ALL THE PERMISSIONS IN THE AWS CONSOLE. This is due to a cyclical dependency with Cognito and S3. soon to be fixed!

```bash
→ amplify add function
? Select which capability you want to add: Lambda function (serverless function)
? Provide an AWS Lambda function name: ticket2invoiceEmailLambdaTrigger
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: Lambda trigger
? What event source do you want to associate with Lambda trigger? Amazon DynamoDB Stream
? Choose a DynamoDB event source option Use API category graphql @model backed DynamoDB table(s) in the current Amplify project
Selected resource ticket2invoiceapi
? Choose the graphql @model(s) Ticket

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration

? Do you want to configure advanced settings? Yes
? Do you want to access other resources in this project from your Lambda function? Yes
? Select the categories you want this function to have access to. auth, storage, api
? Select the operations you want to permit on ticket2invoiceapp5acd81e8 read, update
? Storage has 3 resources in this project. Select the one you would like your Lambda to access ticket2invoicestorage, Ticket:@model(appsync), Company:@model(appsync)
? Select the operations you want to permit on ticket2invoicestorage read, update
? Select the operations you want to permit on Ticket:@model(appsync) read, update
? Select the operations you want to permit on Company:@model(appsync) read, update
? Select the operations you want to permit on ticket2invoiceapi Query, Mutation

You can access the following resource attributes as environment variables from your Lambda function
	API_TICKET2INVOICEAPI_COMPANYTABLE_ARN
	API_TICKET2INVOICEAPI_COMPANYTABLE_NAME
	API_TICKET2INVOICEAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_TICKET2INVOICEAPI_GRAPHQLAPIIDOUTPUT
	API_TICKET2INVOICEAPI_GRAPHQLAPIKEYOUTPUT
	API_TICKET2INVOICEAPI_TICKETTABLE_ARN
	API_TICKET2INVOICEAPI_TICKETTABLE_NAME
	AUTH_TICKET2INVOICEAPP5ACD81E8_USERPOOLID
	ENV
	REGION
	STORAGE_TICKET2INVOICESTORAGE_BUCKETNAME
? Do you want to invoke this function on a recurring schedule? No
? Do you want to configure Lambda layers for this function? No
? Do you want to edit the local lambda function now? No
Successfully added resource ticket2invoiceEmailLambdaTrigger locally.
```

## Resources

```graphql
# schema.graphql
type Ticket
  @model
  @auth(
    rules: [
      { allow: owner }
      { allow: private, operations: [read] }
      { allow: public, operations: [read] }
    ]
  ) {
  id: ID!
  sent: Boolean!
  companyName: String!
  companyEmail: AWSEmail!
  image: String!
}

type Company
  @model
  @auth(
    rules: [
      { allow: owner }
      { allow: private, operations: [read] }
      { allow: public, operations: [read] }
    ]
  ) {
  id: ID!
  name: String!
  email: AWSEmail!
}
```

```js
// index.js (function code)
var aws = require("aws-sdk")
var ses = new aws.SES({ region: process.env.REGION })
const s3 = new aws.S3()
const mailcomposer = require("nodemailer/lib/mail-composer")

const emailText = `Buenas,

me podrían pasar una factura del ticket adjunto?

mis datos fiscales:
XXX
XXX
XXX

gracias
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
  console.log("SEND MAIL!!!!")
  return new Promise((resolve, reject) => {
    let sendRawEmailPromise

    const mail = new mailcomposer({
      from: "my@email.com",
      replyTo: "my@email.com",
      to,
      subject: "My name | Solicitud de Factura",
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
```