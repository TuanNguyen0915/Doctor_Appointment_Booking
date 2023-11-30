// npm modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { useRef } from 'react'
// css
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// images
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }

  return (
    <section>
      <div className="container lg:mt-[8rem] mt-[4rem]">
        <div className="xl:w-[470px] mx-auto">
          <h2
            className="heading text-center"
          >
            What our patients say</h2>
        </div>
        <p className="text_para text-center">
          World-class care for everyone. Our health System offers unmatched, expert health care.
        </p>
        {/* SWIPER */}
        <div className='my-[30px] lg:mt-[55px] mx-[50px]'>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}

          >
            <SwiperSlide>
              <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center justify-around'>
                  <img src={patientAvatar} alt="" />
                  <div>
                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                      Tuan Nguyen
                    </h4>
                    <div className='flex items-center gap-[2px]'>
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                    </div>
                  </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                  I have taken medical services from them. They treat so well and they are proving the best medical service.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center justify-around'>
                  <img src={patientAvatar} alt="" />
                  <div>
                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                      Chi Hoang
                    </h4>
                    <div className='flex items-center gap-[2px]'>
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                    </div>
                  </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                  I have taken medical services from them. They treat so well and they are proving the best medical service.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center justify-around'>
                  <img src={patientAvatar} alt="" />
                  <div>
                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                      Long Phan
                    </h4>
                    <div className='flex items-center gap-[2px]'>
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                    </div>
                  </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                  I have taken medical services from them. They treat so well and they are proving the best medical service.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-[30px] px-5 rounded-[13px]'>
                <div className='flex items-center justify-around'>
                  <img src={patientAvatar} alt="" />
                  <div>
                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                      To Linh
                    </h4>
                    <div className='flex items-center gap-[2px]'>
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                      <HiStar className='text-yellowColor w-[18px] h-5' />
                    </div>
                  </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                  I have taken medical services from them. They treat so well and they are proving the best medical service.
                </p>
              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section >
  )
}

export default Testimonial


