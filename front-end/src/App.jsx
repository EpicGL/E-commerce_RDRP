import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>} exact/>
    </Routes>
    </>
  )
}

export default App
