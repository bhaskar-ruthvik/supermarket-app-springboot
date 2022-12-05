// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTable from 'components/TableAdmin'
import Widget from 'components/Widget'
import React from 'react'
import './admin.css'


function Admin() {
  return (
    <div className="app">
      <Header></Header>

      <div className="body">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="content">
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
      </div>
      <div className="admin-table">
        <BasicTable></BasicTable>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Admin
