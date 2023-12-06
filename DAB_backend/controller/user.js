import User from '../models/User.js'
import Booking from '../models/Booking.js'
import Doctor from '../models/Doctor.js'


async function updateUser(req, res) {
  const id = req.params.userId
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ success: true, newData: updatedUser })
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to updated." })
  }
}

async function deleteUser(req, res) {
  const id = req.params.userId
  try {
    const deletedUser = await User.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "Deleted" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Fail to delete this user" })
  }
}

async function showUser(req, res) {
  const id = req.params.userId
  try {
    const selectedUser = await User.findById(id)
    res.status(200).json({ success: true, message: "Fount this user", data: selectedUser })
  } catch (error) {
    res.status(404).json({ success: false, message: "Can't found this user" })
  }
}

async function allUsers(req, res) {
  try {
    // Don't show the user password
    const users = await User.find({}).select('-password')
    res.status(200).json({ success: true, message: "Fount all users", data: users })
  } catch (error) {
    res.status(404).json({ success: false, message: "Can't found" })
  }
}

async function getUserProfile(req, res) {
  try {
    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" })
    }
    const { password, ...rest } = user._doc
    res.status(200).json({ success: true, message: "Profile is getting", data: { ...rest } })
  } catch (error) {
    res.status(500).json({success:false, message: 'Something went wrong'})
  }
}

async function getAppointment(req, res) {
  const userId = req.userId
  try {
    const bookings = await Booking.find({ user: userId })
    const doctorIds = bookings.map(el => el.doctor.id)
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')
    res.status(200).json({ success: true, message: 'Appointment are getting', data: doctors })
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" })
  }
}


export { updateUser, deleteUser, showUser, allUsers, getAppointment, getUserProfile }
