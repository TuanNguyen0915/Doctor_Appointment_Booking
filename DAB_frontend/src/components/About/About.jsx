// images
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
      <div className="container">
        <div
          className="flex justify-between xl:gap-[0] lg:gap-[130px] gap-[50px] lg:flex-row flex-col"
        >
          {/* ------------ABOUT IMG------------ */}
          <div className="relative xl:w-[770px] lg:w-1/2 w-3/4 z-10 lg:order-1 order-2">
            <img src={aboutImg} alt="about" />
            <div className='absolute z-20 bottom-4 md:w-[300px] w-[200px] lg:right-[22%] md:right-[-7%] right-[-30%]'>
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ------------ABOUT CONTENT------------ */}
          <div className='lg:w-1/2 xl:w-[670p[px] w-full lg:order-2 order-1  '>
            <h2 className='heading'>Proud to be one of the nations best</h2>
            <p className='text_para'>
              For 30 years in a row, U.S. News & World Report has recognized us as one of the best publics hospitals in the Nation and #1 in Texas.
            </p>
            <p className='text_para mt-[30px]'>
              Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished but toward what we can do tomorrow. Providing the best.
            </p>
            <Link to='/'><button className='btn'>Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About