// npm modules
import { Link } from "react-router-dom"
// data
import { features } from "../../assets/data/features"
// img
import featureImg from '../../assets/images/feature-img.png'

const Feature = () => {

  let today = new Date().toDateString()
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
          {/* ---------FEATURE CONTENT-------- */}
          <div className="xl:w-[670px]">
            <h2 className="heading ">
              Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text_para lg:w-3/4 w-full"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <Link>
              <button className="btn">Learn More</button>
            </Link>
          </div>
          {/* ---------FEATURE IMG-------- */}
          <div className="relative z-10 xl:w-[770px] flex justify-end lg:mt-0 mt-[50px] lg:mb-0 mb-8 ">
            <img src={featureImg} alt="" />
            <div
              className="w-[150px] bg-white absolute md:bottom-[100px] bottom-[50px] xl:hidden left-[-10px] z-20 p-2 lg:pt-4 lg:pb-[26px] pb-3  rounded-[10px]"
            > 
              <div className="flex items-center justify-center">
                <div className="flex items-center lg:gap-3 gap-[6px]">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor">
                    {today}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature