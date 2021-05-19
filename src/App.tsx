import React from "react"
import TicketCreate from "./components/ticket-create"
import CompanyCreate from "./components/company-create"
import TicketList from "./components/ticket-list"
import CompanyList from "./components/company-list"

function App() {
  return (
    <div>
      <CompanyCreate />
      <TicketCreate />
      <TicketList />
      <CompanyList />
    </div>
  )
}

export default App
