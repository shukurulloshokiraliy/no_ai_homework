import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/header.jsx'
import Footer from '../pages/footer.jsx'
import Hero from '../pages/Hero.jsx'
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
    <Header />
    <main className="flex-grow">
    <Hero></Hero>
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}

export default Layout
