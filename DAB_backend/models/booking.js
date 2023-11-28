import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Types.ObjectId, ref: "Doctor", require: true
  },
  user: {
    type: mongoose.Types.ObjectId, ref: "User", require: true
  },
  appointmentFee: {
    type: String, require: true
  },
  appointmentDate: {
    type: Date,
    require: true
  },
  status: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending"
  },
  isPaid: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

const Booking = mongoose.model("Booking", bookingSchema)
export default Booking