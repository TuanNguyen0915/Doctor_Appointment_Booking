import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const ServiceCard = ({ service, index }) => {
  return (
    <div className="py-[30px] px-3 lg:px-5 xl:w-[30%] md:w-[50%] w-full">
      <h2
        className="text-[26px] leading-9 text-headingColor font-[700]"
      >
        {service.name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {service.desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to='/doctors'
          className="my-4 p-3 border-[1px] border-textColor hover:bg-primaryColor hover:text-white hover:border-primaryColor rounded-full "
        >
          <BsArrowRight className="w-5 h-5 " />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]" style={{ background: `${service.bgColor}`, color: `${service.textColor}` }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  )
}

export default ServiceCard