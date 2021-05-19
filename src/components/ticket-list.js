import React from "react"
import { API, Storage } from "aws-amplify"
import { listTickets } from "../graphql/queries"
import { deleteTicket } from "../graphql/mutations"
import { useQuery, queryCache } from "react-query"

export default function CompanyList() {
  const { data, error, isLoading, isError } = useQuery("tickets", async () => {
    const { data } = await API.graphql({ query: listTickets })
    console.log(
      "🚀 ~ file: ticket-list.js ~ line 10 ~ const{data,error,isLoading,isError}=useQuery ~ data",
      data
    )
    const tickets = await Promise.all(
      data.listTickets.items.map(async (ticket) => {
        const image = await Storage.get(ticket.image)
        ticket.s3Image = image
        return ticket
      })
    )

    return tickets
  })

  function deleteAll() {
    const question = window.confirm(
      "estas seguro que quieres borrar TODOS los tickets??"
    )

    if (question) {
      data.forEach(async (ticket) => {
        await API.graphql({
          query: deleteTicket,
          variables: { input: { id: ticket.id } },
        })
        await Storage.remove(ticket.image)
      })

      queryCache.invalidateQueries("tickets")
    }
  }

  if (isLoading) {
    return <p>...loading...</p>
  }

  if (isError) {
    console.log("ticket list error => ", error)
    return (
      <p className="text-red-800 font-bold text-xl">ticket list error :(</p>
    )
  }

  return (
    <div className="m-4 border border-gray-500 rounded p-4">
      <h2 className="text-2xl font-bold">Tickets list</h2>
      <ul>
        {data.map((ticket) => (
          <li key={ticket.id} className="block flex items-center">
            <img
              className="flex-none"
              src={ticket.s3Image}
              alt={ticket.image}
              style={{ width: 80, height: 80 }}
            />
            <div className="flex-1">
              <p>{ticket.id}</p>
              <p>{ticket.compaName}</p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={deleteAll}>delete all</button>
    </div>
  )
}

/*
import { Storage, API } from 'aws-amplify';
import { getProduct } from './graphql/mutations';

async function getProductById () {
  const product = await API.graphql({ query: getProduct, variables: { id: "12345" }});
  const s3Image = await Storage.get(product.data.getProduct.image);
  product.data.getProduct.s3Image = s3Image;
  console.log('product:', product);
}

*/
