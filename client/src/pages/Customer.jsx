// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTable from 'components/TableAdmin'
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
        <BasicTable></BasicTable>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Customer
