// npm modules
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage/HomePage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Login from './pages/LoginPage/login'
import Register from './pages/RegisterPage/Register'
import MyAccount from './Dashboard/user-account/MyAccount'
import Dashboard from './Dashboard/doctor-account/Dashboard'
import Doctor from './pages/DoctorPage/Doctor'
import DoctorDetail from './pages/DoctorPage/DoctorDetail'
import { ProtectedRoute } from './routes/ProtectedRoute'

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
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:doctorId' element={<DoctorDetail />} />
        <Route
          path='/users/profile/me'
          element={
            <ProtectedRoute allowedRoutes={['patient']} >
              <MyAccount />
            </ProtectedRoute>} />




        <Route
          path='/doctors/profile/me'
          element={
            <ProtectedRoute allowedRoutes={['doctor']} >
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App
