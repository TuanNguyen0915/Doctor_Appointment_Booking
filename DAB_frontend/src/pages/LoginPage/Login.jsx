import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { AuthContext } from "../../context/AuthContext"

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL

const Login = () => {
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { dispatch } = useContext(AuthContext)

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // setLoading(true)
    try {
      const result = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      })
      const res = await result.json()
      if (!result.ok) {
        throw new Error(res.message)
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: res.data,
          token: res.token,
          role: res.role
        }
      })
      console.log(res)
  
      toast.success(res.message)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <NavBar />
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">Hello! <span className="text-primaryColor"> Welcome</span> Back</h3>

          {/* FORM */}
          <form className="py-4 md:py-0" onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email" placeholder="Enter Your Email"
                name='email' value={formData.email}
                onChange={handleOnChange}
                className="w-full border-b py-4 px-3 border-[#0066ff61] rounded-lg mx-[10[x] mb-[10px] focus:border-primaryColor text-[22px] text-headingColor leading-7"
                required
              />
              <input
                type="password" placeholder="Enter Your Password"
                name='password' value={formData.password}
                onChange={handleOnChange}
                className="w-full border-b py-4 px-3 border-[#0066ff61] rounded-lg mx-[10[x] mb-[10px] focus:border-primaryColor text-[22px] text-headingColor leading-7"
                required
              />
              <button type='submit' className="btn w-full rounded-lg">Login</button>
            </div>
            <p
              className="mt-5 text-textColor text-center"
            >
              Don&#39;t have an account ? <Link
                to='/register'
                className="text-primaryColor font-bold hover:underline"
              >Register new account</Link>
            </p>
          </form>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Login