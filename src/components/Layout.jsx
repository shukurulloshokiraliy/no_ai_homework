import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/header.jsx'
import Footer from '../pages/footer.jsx'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
    <Header />
    <main className="flex-grow">
   
      <Outlet />
     
    </main>
    <Footer />
  </div>
  )
}

export default Layout
