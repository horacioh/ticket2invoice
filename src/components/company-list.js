import React from "react"
import { API } from "aws-amplify"
import { listCompanys } from "../graphql/queries"
import { useQuery } from "react-query"

export default function CompanyList() {
  const { data, error, isLoading, isError } = useQuery(
    "companies",
    async () => {
      const { data } = await API.graphql({ query: listCompanys })
      return data.listCompanys.items
    }
  )

  if (isLoading) {
    return <p>...loading...</p>
  }

  if (isError) {
    console.log("company list error => ", error)
    return (
      <p className="text-red-800 font-bold text-xl">company list error :(</p>
    )
  }

  return (
    <div className="m-4 border border-gray-500 rounded p-4">
      <h2 className="text-2xl font-bold">Companies list</h2>
      <ul>
        {data.map((company) => (
          <li
            key={company.id}
            className="block flex flex-col md:flex-row items-center"
          >
            <p className="px-4">{company.name}</p>
            <p className="px-4">{company.email}</p>
            <p className="px-4">{company.id}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
