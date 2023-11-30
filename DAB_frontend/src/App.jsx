// npm modules
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage/HomePage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
// components

// css
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />

      </Routes>
    </>
  )
}

export default App
