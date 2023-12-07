import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"

// components
import MyBooking from "./MyBookings"
import MyProfile from "./MyProfile"
import useGetProfile from '../../hooks/useFetchData'


const MyAccount = () => {
  const { dispatch } = useContext(AuthContext)

  const [tab, setTab] = useState('bookings')

  const { data: userData, loading, error } = useGetProfile(`${import.meta.env.VITE_BACK_END_SERVER_URL}/users/profile/me`)
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" })
  }



  return (
    <>
      <NavBar />
      <div className="section">
        {!loading && !error &&
          <div className="max-w-[1170px] px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="pb-[50px] px-[30px] rounded-md">
                <div className="flex items-center justify-center">
                  <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                    <img src={userData.photo} alt="" className="w-full h-full rounded-full" />
                  </figure>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    {userData.name}
                  </h3>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    {userData.email}
                  </p>
                  <p className="text-textColor text-[15px] leading-6 font-medium">
                    Blood Type: <span className="ml-2 text-headingColor text-[22px] leading-8">{userData.bloodType}</span>
                  </p>
                </div>

                <div className="mt-[50px] md:mt-[100px]">
                  <button
                    className="w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md mr-5 mb-5 text-white"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                  <button
                    className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white">
                    Delete Account
                  </button>
                </div>
              </div>

              {/* BOOKING AND PROFILE SETTING */}
              <div className="md:col-span-2 md:px md:px-[30px]">
                <div>
                  <button
                    className={` ${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                    onClick={() => setTab('bookings')}
                  >
                    My Booking
                  </button>
                  <button
                    className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'}  p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                    onClick={() => setTab('settings')}
                  >
                    Profile Setting
                  </button>
                </div>
                {/* RENDER MyBooking or MyProfile */}
                {tab === 'bookings' ? <MyBooking /> : tab === 'settings' ? <MyProfile userData={userData} /> : null}

              </div>
            </div>
          </div>
        }
        <Footer />
      </div>
    </>
  )
}

export default MyAccount