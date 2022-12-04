import Chart from 'components/Chart'
import Header from 'components/Header'
import BasicTable from 'components/TableAdmin'
import Widget from 'components/Widget'
import React from 'react'
import './admin.css'

function Admin() {
  return (
    <div className="app">
      <Header></Header>
      <div className="admin-table">
      <BasicTable></BasicTable>
      </div>
      
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
    </div>
  )
}

export default Admin
