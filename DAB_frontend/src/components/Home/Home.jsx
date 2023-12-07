// npm modules
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
// data
import { heroCounters } from "../../assets/data/hero-section"
import { heroServices } from "../../assets/data/hero-section"
// images
import heroImg01 from "../../assets/images/hero-img01.png"
import heroImg02 from "../../assets/images/hero-img02.png"
import heroImg03 from "../../assets/images/hero-img03.png"


const Home = () => {
  return (
    <>
      {/* ----------------HERO SECTION---------------- */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="md:text-[60px] text-[36px] md:leading-[70px] leading-[46px] text-headingColor font-[800] "
                >
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est officiis explicabo deserunt ipsa necessitatibus eaque quos culpa aliquam ipsum recusandae, pariatur vero corrupti qui, et modi. Tenetur, ratione necessitatibus?
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/* hero counter */}
              <div className="lg:mt-[70px] mt-[30px] flex md:flex-row flex-col lg:items-center lg:gap-[30px] gap-5">
                {heroCounters.map((counter, index) => (
                  <div key={index}>
                    <h2
                      className="lg:text-[44px] text-[36px] lg:leading-[54px] leading-[56px] font-[700] text-headingColor"
                    >
                      {counter.title}
                    </h2>
                    <span
                      className={`${counter.color} lg:w-[120px] w-[100px] h-2 rounded-full block lg:mt-[-10px] mt-[-14px]`}></span>
                    <p className="text_para">
                      {counter.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* hero images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="doctor" className="w-full mt-[50px]" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SERVICE */}
      <section>
        <div className="container py-[75px]">
          <div className="lg:w-[470px] mx-auto">
            <h2
              className="heading text-center"
            >
              Providing the best medical services
            </h2>
            <p className="text_para text-center mt-2">
              World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>
          <div className="my-[30px] mx-5">
            <div
              className="flex lg:flex-row flex-col justify-between items-center py-[30px] px-5"
            >
              {heroServices.map((service, index) => (
                <div key={index} className={`flex flex-col justify-center items-center px-5 lg:border-b-0 ${index !== (heroServices.length - 1) ? 'border-b-[1px]' : ''} lg:mb-0 ${index !== (heroServices.length - 1) ? 'mb-[40px]' : ''}`}>
                  <img src={service.icon} alt="icon" />
                  <h2 className="text-[16px] leading-9 text-headingColor font-[700]">{service.title}</h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">{service.text}</p>
                  <Link to={service.link} className="my-4 p-3 border-[1px] border-textColor hover:bg-primaryColor hover:text-white hover:border-primaryColor rounded-full ">
                    <BsArrowRight className="w-4 h-4 " />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ----------------HERO SECTION END---------------- */}
    </>
  )
}

export default Home