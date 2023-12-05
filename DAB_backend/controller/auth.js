import User from '../models/User.js'
import Doctor from '../models/Doctor.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// const generateToken = (user) => {
//   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
//     expiresIn: '15d'
//   })
// }


const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' })
}

async function register(req, res) {
  const { email, password, name, role, gender, photo } = req.body
  try {
    let user = null
    if (role === 'patient') {
      user = await User.findOne({ email })
    } else if (role === 'doctor') {
      user = await Doctor.findOne({ email })
    }
    // check user exists ?
    if (user) {
      return res.status(400).json({ message: 'User already exists.' })
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    // register new account
    if (role === 'patient') {
      user = await User.create({
        email,
        password: hashPassword,
        name,
        role,
        photo,
        gender
      }
      )
    } else if (role === 'doctor') {
      user = await Doctor.create({
        email,
        password: hashPassword,
        name,
        role,
        gender,
        photo,
      }
      )
    }
    res.status(201).json({ success: true, newUser: user })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error. Try again ' })
  }
}

async function login(req, res) {
  try {
    let user
    const patient = await User.findOne({ email: req.body.email })
    const doctor = await Doctor.findOne({ email: req.body.email })
    // check the user is patient or doctor or not exist by email
    user = patient ? patient : doctor ? doctor : null
    if (!user) {
      return res.status(404).json({ success: false, message: "This account does not register yet !!!" })
    }
    // checking password
    const isPasswordMatching = bcrypt.compare(req.body.password, user.password)
    if (!isPasswordMatching) {
      return res.status(404).json({ success: false, message: "Password is not matching" })
    }

    // if password is matching, get token
    const token = generateToken(user)
    const { password, role, appointment, ...rest } = user._doc
    res.status(200).json({ success: true, message: "Successfully login", token, data: { ...rest }, role })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}


export { register, login }