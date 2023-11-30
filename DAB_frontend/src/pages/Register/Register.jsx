import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"

import signUpImg from '../../assets/images/signup.gif'
import { Link } from "react-router-dom"

const Register = () => {
  const [selectedFile, setSelectedFile] = useState('')
  const [previewURL, setPreviewURL] = useState('')


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
    gender: '',
    photo: '',
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    //using cloudinary to upload photo
    console.log(file)
  }

  const handleSubmit = async e => {
    e.preventDefault()

  }

  return (
    <>
      <NavBar />
      <section className="px-5 lg:px-[50px]">
        <div className="flex md:flex-row flex-col items-center justify-around mt-5 md:px-[50px] px-5">
          <figure className="md:w-[40%] w-[80%] ">
            <img src={signUpImg} alt="signup" className="w-full md:rounded-l-lg" />
          </figure>
          {/* FORM */}
          <form
            className="py-4 md:py-0 md:ml-5 flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <h3 className="text-headingColor text-[24px] md:text-[26px] mt-5 md:mt-0">Create an <span className="text-primaryColor font-bold">Account</span></h3>
            <div className="mb-5 md:px-[100px]">
              <input
                type="text" placeholder="Enter Your Full Name"
                name='name' value={formData.name}
                onChange={handleOnChange}
                className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"
                required
              />
              <input
                type="email" placeholder="Enter Your Email"
                name='email' value={formData.email}
                onChange={handleOnChange}
                className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"
                required
              />
              <input
                type="password" placeholder="Enter Your Password"
                name='password' value={formData.password}
                onChange={handleOnChange}
                className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"
                required
              />
              {/* SELECTION */}
              <div className="flex item-center justify-between">
                {/* PATIENT OR DOCTOR */}
                <label
                  htmlFor=""
                  className="text-textContent font-semibold text-[15px] leading-7 px-3"
                > Are you a:
                  <select
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={formData.role}
                    onChange={handleOnChange}
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                {/* GENDER */}
                <label
                  htmlFor=""
                  className="text-textContent font-semibold text-[15px] leading-7 px-3"
                > Gender:
                  <select
                    name="gender"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    value={formData.gender}
                    onChange={handleOnChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              {/* UPLOAD AVATAR */}
              <div className="my-5 px-3 flex items-center gap-3">
                <h3 className="text-[16px] font-[600]">Upload your avatar: </h3>
                <div className="relative">
                  <input
                    type="file"
                    name='photo'
                    id='customFile'
                    accept=".jpg, .png"
                    onChange={handleFileInputChange}
                    className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label htmlFor="customFile"
                    className="flex items-center justify-center bg-[#0066ff46] text-headingColor font-semibold px-3 py-2 rounded-lg overflow-hidden cursor-pointer"
                  >Upload Photo</label>
                </div>
              </div>
              {/* BUTTON */}
              <button type='submit' className="btn w-full rounded-lg ">Register</button>
            </div>
            <p
              className="mt-5 text-textColor text-center"
            >
              Already have an account ? <Link
                to='/login'
                className="text-primaryColor font-bold hover:underline"
              >Login</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Register