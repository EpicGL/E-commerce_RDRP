import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/navbar/NavBar"
import HomePage from './pages/home/HomePage'
import Login from './pages/login/AuthPage'
import AboutUs from './pages/about/AboutUs'
import Contact from './pages/contact/Contact'
import EveryThing from './pages/everything/EveryThing'
import Men from './pages/men/Men'
import Women from './pages/women/women'
import Accessories from './pages/accessories/accessories'
import UserPage from './pages/user/UserPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        
        <Route index element={<HomePage />} />
        
        <Route path='/everything' element={<EveryThing />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/accessories' element={<Accessories />} />
        
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact-us' element={<Contact />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Login/>} />
        <Route path='/profile' element={<UserPage />} />
        
        
      </Routes>
    </>
  )
}

export default App
