import faqImg from '../../assets/images/faq-img.png'
// data
import { faqs } from '../../assets/data/faqs'
// component
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className="container lg:mt-[5rem] mt-[2rem]">
      <div className="flex justify-between gap-[50px] lg:gap-0">
        <div className="w-1/2 hidden md:block">
          <img src={faqImg} alt="faq" />
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='heading'>Most questions by our beloved patients</h2>
          <div>
            {faqs.map((faq, index) => (
              <FaqCard key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq