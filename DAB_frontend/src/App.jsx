// npm modules
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage/HomePage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Login from './pages/LoginPage/login'
import Register from './pages/RegisterPage/Register'
// components

// css
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
