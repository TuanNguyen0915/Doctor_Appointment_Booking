import Doctor from "../models/doctor.js"

export const getAllDoctors = async (req, res) => {
  try {
    const allDoctor = await Doctor.find({})
    res.status(200).json({
      success: true,
      data: allDoctor
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: "Not found"
    })
  }
}

export const showDoctor = async (req, res) => {
  try {
    const selectedDoctor = await Doctor.findById(req.params.doctorId)
    res.status(200).json(
      {
        success: true,
        data: selectedDoctor
      }
    )
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, message: "Doctor not found" })
  }
}


export const updateDoctor = async (req, res) => {
  try {
    const selectedDoctor = await Doctor.findByIdAndUpdate(
      req.params.doctorId,
      req.body,
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: 'Successfully updated.',
      data: selectedDoctor
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Fail to update.' })
  }
}

export const deleteDoctor = async (req, res) => {
  try {
    const selectedDoctor = await Doctor.findByIdAndDelete(
      req.params.doctorId,
    )

    res.status(200).json({
      success: true,
      message: `Deleted ${selectedDoctor.email}`,
      data: selectedDoctor
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Not Doctor found.' })
  }

}
