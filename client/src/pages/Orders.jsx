// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTableOrder from 'components/TableOrder'
import Widget from 'components/Widget'
import React from 'react'
import './orders.css'


function Orders() {
  return (
    <div className="app">
      <Header></Header>

      <div className="obody">
      <h2>My Orders</h2>
     
      </div>
      <div className="admin-table">
        <BasicTableOrder></BasicTableOrder>
      </div>
    </div>
  )
}

export default Orders
