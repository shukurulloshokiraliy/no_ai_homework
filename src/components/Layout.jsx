import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/header.jsx'
import Footer from '../pages/footer.jsx'
import Hero from '../pages/Hero.jsx'
import Blog from '../pages/Blog.jsx'
import Carousel from '../pages/Carousel.jsx'
import Seedra from '../pages/Seedra.jsx'
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
    <Header />
    <main className="flex-grow">
    <Hero></Hero>
      <Outlet />
      <Blog></Blog>
      <Carousel></Carousel>
      <Seedra></Seedra>
    </main>
    <Footer />
  </div>
  )
}

export default Layout
