import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
// data
import { heroCounters } from "../../assets/data/hero-section"
// images
import heroImg01 from "../../assets/images/hero-img01.png"
import heroImg02 from "../../assets/images/hero-img02.png"
import heroImg03 from "../../assets/images/hero-img03.png"


const Home = () => {
  return (
    <section>
      {/* NAVBAR */}
      <NavBar />
      {/* HERO SECTION */}
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
                    <p className="text__para">
                      {counter.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* hero images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="doctor" className="w-full mt-[50px]"/>
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]"/>
                <img src={heroImg03} alt="" className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </section>
  )
}

export default Home