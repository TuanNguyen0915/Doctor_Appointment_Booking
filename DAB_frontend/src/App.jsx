// npm modules
import { Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home/Home'

// components

// css
import './App.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
