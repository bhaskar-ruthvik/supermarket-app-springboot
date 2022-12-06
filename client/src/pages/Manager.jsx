// import Example from 'components/Chart'
import React, { useEffect } from 'react'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTableManager from 'components/TableManager'
import Widget from 'components/Widget'
import './manager.css'



function Manager() {
    useEffect(()=>{
        if(window.localStorage.getItem("type")!=("0")){
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
      <div className="admin-table">
        <BasicTableManager></BasicTableManager>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Manager
