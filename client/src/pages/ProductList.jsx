// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTableItem from 'components/TableItems'
import Widget from 'components/Widget'
import React, { useEffect } from 'react'
import './admin.css'


function ProductList() {
    useEffect(()=>{
        if(window.localStorage.getItem("type")!="0"){
            window.location.replace("http://localhost:3000/")
        }
    })
  return (
    <div className="app">
      <Header></Header>

      <div className="body">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="content">
      {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
      </div> */}
      <div className="admin-table">
        <BasicTableItem></BasicTableItem>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ProductList
