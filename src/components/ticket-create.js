import React, { useState } from "react"
import { useMutation, queryCache, useQuery } from "react-query"
import { Storage, API } from "aws-amplify"
import { createTicket } from "../graphql/mutations"
import { listCompanys } from "../graphql/queries"

export default function TicketCreate() {
  const [companyId, setCompanyId] = useState()
  const [file, setFile] = useState()

  const { data: companies, isSuccess: isCompaniesSuccess } = useQuery(
    "companies",
    async () => {
      const { data } = await API.graphql({ query: listCompanys })
      return data.listCompanys.items
    }
  )

  async function onCreateTicket(e) {
    e.preventDefault()

    try {
      await addTicket({ companyId, file })
    } catch (err) {
      console.error(err)
    }
  }

  const [addTicket] = useMutation(
    async ({ companyId, file }) => {
      const date = new Date()
      const id = Date.now()
      const ext = file.name.split(".").reverse()[0]
      const fileName = `ticket_${date.toISOString()}_${id}.${ext}`
      const { email, name } = companies.filter((c) => c.id === companyId)[0]
      await Storage.put(fileName, file)
      const ticket = {
        id,
        sent: false,
        companyEmail: email,
        companyName: name,
        image: fileName,
      }
      console.log("🚀 ~ ticket", ticket)
      try {
        await API.graphql({
          query: createTicket,
          variables: { input: ticket },
        })
      } catch (err) {
        console.log("error => ", err)
        Storage.remove(fileName)
      }
    },
    {
      onSuccess: () => {
        queryCache.invalidateQueries("tickets")
        setCompanyId(null)
        setFile(null)
      },
    }
  )

  function handleImageChange(e) {
    const [file] = e.target.files
    // console.log("handleImageChange -> file", file)
    // const url = URL.createObjectURL(file)
    // console.log("handleOnChange -> url", url)
    setFile(file)
  }

  return (
    <div className="m-4 border border-gray-500 rounded p-4">
      <h2 className="text-2xl font-bold">New Ticket form</h2>
      <form onSubmit={onCreateTicket}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => {
              setCompanyId(e.target.value)
            }}
          >
            <option id="-">Select one</option>
            {isCompaniesSuccess &&
              companies.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
