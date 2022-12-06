// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTableCustomer from 'components/TableCustomers'
import React from 'react'
import './customer.css'


function Customer() {
  return (
    <div className="app">
      <Header></Header>

      <div className="body">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="content">
      <div className="admin-table">
        <BasicTableCustomer></BasicTableCustomer>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Customer
