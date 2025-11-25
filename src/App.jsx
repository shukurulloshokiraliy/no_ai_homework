import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Layout from './components/Layout.jsx'
const App = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          
        </Route>
      </Routes>
  )
}

export default App
