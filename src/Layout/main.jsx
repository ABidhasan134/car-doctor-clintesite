import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/footer/footer'
import Navbar from '../pages/shared/header/navbar'

const Main = () => {
  return (
    <div className='container mx-auto'>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
