import User from '../models/user.js'
import Doctor from '../models/doctor.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body
  try {
    // const user = await User.findOne({ email: req.body.email })
    // if (user) throw new Error("Account already exist.")
    // const newUser = await User.create(req.body)
    // res.status(201).json(newUser)
    let user = null
    // check patient or doctor by role
    if (role === 'patient') {
      user = await User.findOne({ email: email })
    } else if (role === 'doctor') {
      user = await Doctor.findOne({ email: email })
    }
    // check if user exists
    if (user) {
      return res.status(400).json({ message: 'User already exist.' })
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    // create new User
    if (role === 'patient') {
      user = new User({
        email: email,
        password: hashPassword,
        name: name,
        role: role,
        photo: photo,
        gender: gender
      })
    } else if (role === 'doctor') {
      user = new Doctor({
        email: email,
        password: hashPassword,
        name: name,
        role: role,
        photo: photo,
        gender: gender
      })
    }
    await user.save()
    res.status(200).json({ success: true, message: 'User successfully created.' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}


export const login = async (req, res) => {
  try {

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}