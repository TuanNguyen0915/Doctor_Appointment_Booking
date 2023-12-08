import { useState } from "react"
import { AiFillStar } from "react-icons/ai"

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewForm, setReviewForm] = useState({
    text: '',
    rating: rating
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setReviewForm({ ...reviewForm,rating:rating, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()  
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-headingColor mt-4 text-[16px] leading-6 font-semibold">How would you rate the overall experience?</h3>
      </div>
      <div onChange={handleOnChange}>
        {[...Array(5).keys()].map((_, idx) => {
          idx += 1
          return (
            <button
              key={idx}
              type="button"
              className={`${idx <= ((rating && hover) || hover) ? 'text-primaryColor' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              onClick={() => setRating(idx)}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setHover(0)
                setRating(0)
              }}
            >
              <span><AiFillStar /></span>
            </button>)
        })}
      </div>

      <div>
        <h3 className="text-headingColor mt-4 text-[16px] leading-6 font-semibold">Share you feedback or suggestions</h3>
        <textarea
          className="border border-solid border-[#0066ff34] w-full focus:outline outline-primaryColor px-4 py-3 rounded-md mt-3"
          rows="5"
          placeholder="Share your message"
          name='text'
          value={reviewForm.text}
          onChange={handleOnChange}
        ></textarea>
      </div>
        <button className="btn">Submit Feedback</button>
    </form>
  )
}

export default FeedbackForm