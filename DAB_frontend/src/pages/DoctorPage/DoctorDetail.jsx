import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from '../../assets/data/doctors'
import starIcon from '../../assets/images/Star.png'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import DoctorAbout from '../../components/Doctor/DoctorAbout'
import DoctorFeedBack from '../../components/Doctor/DoctorFeedBack'
const DoctorDetail = () => {
  const [tab, setTab] = useState('about')

  const { doctorId } = useParams()
  const doctor = doctors.find(doctor => doctor.id === doctorId)
  return (
    <>
      <NavBar />
      <div className='w-full flex md:flex-row flex-col md:px-[4rem] px-[2rem] mt-10'>
        {/* DOCTOR'S INTRO */}
        <div className="flex md:flex-row flex-col gap-5 md:w-1/2 w-full md:mt-[15rem] md:mr-[2rem] ">
          <div className='flex md:items-start justify-center'>
            <figure className='max-w-[200px] max-h-[200px]   flex items-center justify-between'>
              <img src={doctor.photo} alt="" className='w-full' />
            </figure>

          </div>
          <div>
            <span
              className=' bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-md'
            >{doctor.specialty}
            </span>
            <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{doctor.name}</h3>
            <div className='flex items-center gap-[6px]'>
              <span
                className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'
              >
                <img src={starIcon} alt="" /> {doctor.avgRating}
              </span>
              <div
                className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor text-right w-full'
              >({doctor.totalRating})</div>
            </div>

            <p className='text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] text-justify'>
              A doctor is a medical professional who has completed the necessary education and training to diagnose, treat, and prevent illnesses and injuries in individuals. They provide essential medical care, prescribe medication, perform surgeries, and offer preventative measures to help people maintain their health.
            </p>
          </div>
        </div>

        {/* ABOUT AND FEEDBACK */}
        <div className='gap-5 md:w-1/2 w-full md:mr-[2rem] '>
          <div
            className='mt-[50px] border-b border-solid border-[#0066ff34]'
          >
            <button
              onClick={() => setTab('about')}
              className={`${tab === 'about' && 'border-b border-primaryColor'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >About
            </button>

            <button
              onClick={() => setTab('feedback')}
              className={`${tab === 'feedback' && 'border-b border-primaryColor'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >Feedback
            </button>
          </div>

          <div className='mt-5'>
            {tab === 'about' && <DoctorAbout doctor={doctor} />}
            {tab === 'feedback' && <DoctorFeedBack doctor={doctor} />}
          </div>
        </div>
      </div>
        {/* Side Panel */}
      <div></div>
      <Footer />
    </>
  )
}

export default DoctorDetail








