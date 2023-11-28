import { Link } from "react-router-dom"

import starIcon from "../../assets/images/Star.png"
import { BsArrowRight } from "react-icons/bs"

const DoctorCard = ({ doctor }) => {
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={doctor.photo} alt={doctor.name} className="w-full" />
      </div>
      <h2
        className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor text-center font-[700] mt-3 lg:mt-5"
      >
        {doctor.name}
      </h2>
      {/* DOCTOR INFO */}
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span
          className="bg-[#CCF0F3] text-irisBlueColor py-2 px-4 lg:py-2 lg:px-6 leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-md">
          {doctor.specialty}
        </span>
        <div className="flex items-center gap-[6px]">
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px ;leading-7 font-semibold text-headingColor"
          >
            <img src={starIcon} alt="star" />{doctor.avgRating}
          </span>
          <span 
          className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px ;leading-7 font-[400] text-textColor"
          >({doctor.totalRating})</span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">+{doctor.totalPatients} patients</h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">At {doctor.hospital}</p>
        </div>
        <Link to='/doctors' className="my-4 p-3 border-[1px] border-textColor hover:bg-primaryColor hover:text-white hover:border-primaryColor rounded-full ">
                    <BsArrowRight className="w-4 h-4 " />
                  </Link>
      </div>
    </div>

  )
}

export default DoctorCard