import jwt from 'jsonwebtoken'
import Doctor from '../models/Doctor.js'
import User from '../models/User.js'

const authenticate = async (req, res, next) => {
  // get token from headers
  const authToken = req.headers.authorization
  // check token is exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(404).json({ success: false, message: "Not token authorization" })
  }
  try {
    const token = authToken.split(" ")[1]
    // verify token
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.userId = decode.id
    req.role = decode.role
    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is expired' })
    } else {
      return res.status(401).json({ success: false, message: error.message })
    }
  }
}

const restrict = roles => async (req, res, next) => {
  const userId = req.userId
  let user
  const patient = await User.findById(userId)
  const doctor = await Doctor.findById(userId)
  user = patient ? patient : doctor ? doctor : null
  if (!roles.includes(user.role)) {
    return res.status(401).json({ success: false, message: "You're not authorize" })
  }
  next()
}

export { authenticate, restrict }