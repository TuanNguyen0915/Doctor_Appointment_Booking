import User from "../models/user.js"

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.status(200).json({
      success: true,
      data: allUsers
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: "Not found"
    })
  }
}

export const showUser = async (req, res) => {
  try {
    const selectedUser = await User.findById(req.params.userId)
    res.status(200).json(
      {
        success: true,
        data: selectedUser
      }
    )
  } catch (error) {
    console.log(error)
    res.status(404).json({ success: false, message: "User not found" })
  }
}


export const updateUser = async (req, res) => {
  try {
    const selectedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: 'Successfully updated.',
      data: selectedUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Fail to update.' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const selectedUser = await User.findByIdAndDelete(
      req.params.userId,
    )

    res.status(200).json({
      success: true,
      message: `Deleted ${selectedUser.email}`,
      data: selectedUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Not user found.' })
  }

}
