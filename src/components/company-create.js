import React, { useState } from "react"
import { useMutation, queryCache } from "react-query"
import { API } from "aws-amplify"
import { createCompany } from "../graphql/mutations"

export default function CompanyCreate() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function onCreateCompany(e) {
    e.preventDefault()

    try {
      await addCompany({ name, email })
    } catch (err) {
      console.error(err)
    }
  }

  const [addCompany] = useMutation(
    async (input) => {
      await API.graphql({
        query: createCompany,
        variables: { input },
      })
    },
    {
      onSuccess: () => {
        queryCache.invalidateQueries("companies")
        setName("")
        setEmail("")
      },
    }
  )
  return (
    <div className="m-4 border border-gray-500 rounded p-4">
      <h2 className="text-2xl font-bold">New Company form</h2>
      <form onSubmit={onCreateCompany}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
