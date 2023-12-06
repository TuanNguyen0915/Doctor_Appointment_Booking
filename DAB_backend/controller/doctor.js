import Booking from '../models/Booking.js'
import Doctor from '../models/Doctor.js'
import User from '../models/User.js'


const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query
    let doctors
    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $option: 'i' } },
          { specialization: { $regex: query, $option: 'i' } }
        ]
      }).populate('reviews')
    } else {
      doctors = await Doctor.find({}).populate('reviews')
    }
    res.status(200).json({ success: true, doctors })
  } catch (error) {
    res.status(404).json({ success: false, message: "Can not found the doctors" })
  }
}

const showDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId).populate('reviews')
    res.status(200).json({ success: true, message: "Found doctor", data: doctor })
  } catch (error) {
    res.status(500).json({ success: false, message: "Can not found the doctor" })
  }
}

const updateDoctor = async (req, res) => {
  const id = req.params.doctorId
  try {
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({ success: true, message: `${doctor.name}`, data: doctor })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Can not found' })
  }
}

const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.doctorId)
    res.status(200).json({ success: true, message: 'Delete the doctor', data: doctor })
  } catch (error) {
    res.status(404).json({ success: false, message: "Cannot found the doctor" })
  }
}

const getDoctorProfile = async (req, res) => {
  const doctorId = req.doctorId
  try {
    const doctor = await Doctor.findById(doctorId)
    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" })
    }
    const { password, ...rest } = doctor._doc
    const appointments = await Booking.find({ doctor: doctorId })
    return res.status(200).json({ success: true, message: "Profile is getting", data: { ...rest, appointments } })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}



export { showDoctor, updateDoctor, getAllDoctors, deleteDoctor, getDoctorProfile }