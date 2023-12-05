import Review from "../models/Review.js";
import Doctor from "../models/Doctor.js";

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.status(200).json({ success: true, message: "Successful", data: reviews })
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" })

  }
}

const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId
  if (!req.body.user) req.body.user = req.userId
  try {
    const newReview = await Review.create(req.body)
    await Doctor.findByIdAndUpdate(req.body.doctor, { $push: { reviews: newReview._id } })
    res.status(200).json({ success: true, message: "Review submitted", review: newReview })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}


export { getAllReviews, createReview }