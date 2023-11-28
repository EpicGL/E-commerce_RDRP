import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar/NavBar"
import HomePage from './pages/home/HomePage'
import Login from './pages/login/AuthPage'
import AboutUs from './pages/about/AboutUs'
import Contact from './pages/contact/Contact'
import EveryThing from './pages/everything/EveryThing'
import UserPage from './pages/user/UserPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login/>} />
        <Route path='/profile' element={<UserPage />} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/everything' element={<EveryThing/>} />
      </Routes>
    </>
  )
}

export default App
