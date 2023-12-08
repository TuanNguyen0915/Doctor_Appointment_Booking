import { AiFillStar } from 'react-icons/ai'
import avatar from '../../assets/images/avatar-icon.png'
import { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const DoctorFeedBack = ({ doctor }) => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">All Review ({doctor.totalRating})</h4>
        {/* Feedback content */}
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} alt="w-full" />
            </figure>
            <div>
              <h5
                className='text-[16px] leading-6 text-primaryColor'
              >
                Tuan Nguyen
              </h5>
              <p className="text-[14px] leading-6 text-textColor">Feb 14, 2023</p>
              <p className='text_para mt-3 font-medium text-[15px]'>
                Good service, highly recommend 👍
              </p>
            </div>
          </div>
          {/* Rating Star */}
          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067ff' />)}
          </div>
        </div>

        {/* ADD FEEDBACK */}
        <div className="text-center">
          <button
            className={`${showFeedbackForm?'hidden':''} btn rounded-md px-4 py-2`}
            onClick={() => setShowFeedbackForm(true)}
          >Give Feedback</button>
          {showFeedbackForm && <FeedbackForm />}
        </div>
      </div>
    </div>
  )
}

export default DoctorFeedBack