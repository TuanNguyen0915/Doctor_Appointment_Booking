import Doctor from "../models/doctor.js"

export const getAllDoctors = async (req, res) => {
  try {

    // find doctor by using find_box in front end
    const { query } = req.query
    let doctors
    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved',
        $or: [
          { name: { $regex: query, $option: 'i' } },
          { specialization: { $regex: query, $option: 'i' } },

        ]
      })
    } else {
      doctors = await Doctor.find({ isApproved: 'approved' })
    }

    res.status(200).json({
      success: true,
      data: doctors
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
