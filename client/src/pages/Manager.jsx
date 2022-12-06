// import Example from 'components/Chart'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import BasicTableManager from 'components/TableManager'
import Widget from 'components/Widget'
import React from 'react'
import './manager.css'


function Manager() {
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
