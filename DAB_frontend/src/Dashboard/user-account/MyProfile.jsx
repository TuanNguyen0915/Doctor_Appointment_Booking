import { useState } from "react"
import { useNavigate } from "react-router-dom"
import uploadImageToCloudinary from "../../utils/uploadCloundinary"
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'


const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL
const token = localStorage.getItem('token')
const MyProfile = ({ userData }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    password: userData.password,
    gender: userData.gender,
    photo: userData.photo,
    bloodType: userData.bloodType || ''
  })

  // useEffect(() => {
  //   setFormData({
  //     name: userData.name,
  //     email: userData.email,
  //     password: userData.password,
  //     gender: userData.gender,
  //     photo: userData.photo,
  //     bloodType: userData.bloodType
  //   })
  // }, [userData])

  const handleOnChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0]
    //using cloudinary to upload photo
    const data = await uploadImageToCloudinary(file)
    setFormData({ ...formData, photo: data.url })
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const result = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: 'put',
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })
      const { message } = await result.json()
      if (!result.ok) {
        setLoading(false)
        throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <form
        className="py-4 md:py-8 flex flex-col justify-center items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <input
            type="text"
            // placeholder="Enter Your Full Name"
            name='name' value={formData.name}
            onChange={handleOnChange}
            className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"

          />
          <input
            type="email" placeholder="Enter Your Email"
            name='email' value={formData.email}
            onChange={handleOnChange}
            className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"

          />
          <input
            type="password" placeholder="Enter Your Password"
            name='password' value={formData.password}
            onChange={handleOnChange}
            className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"
          />
          <input
            type="text" placeholder="Blood Type"
            name='bloodType' value={formData.bloodType}
            onChange={handleOnChange}
            className="w-full border-b py-4 px-3 border-[#0066ff61] mx-[10[x] mb-[10px] focus:border-primaryColor focus:rounded-lg text-[22px] text-headingColor leading-7"

          />
          {/* SELECTION */}
          <div className="flex item-center justify-between">
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
                <option >Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          {/* UPLOAD AVATAR */}
          <div className="my-5 px-3 flex items-center gap-3">
            {formData.photo &&
              <figure
                className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center"
              >
                <img src={formData.photo} alt="avatar" className="w-full rounded-full" />
              </figure>
            }
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
              >Edit Photo</label>
            </div>
          </div>
          {/* BUTTON */}
          <button
            disabled={loading && true}
            type='submit' className="btn w-full rounded-lg "
          >
            {loading ? <HashLoader size={25} color="#ffffff" /> : 'Update Profile'}
          </button>
        </div>
      </form>
    </>
  )
}

export default MyProfile