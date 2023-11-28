// npm modules
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage/HomePage'

// components

// css
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
