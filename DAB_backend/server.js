import 'dotenv/config'
import mongoose from "mongoose"
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from "cors"
import jwb from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
// connect mongoose to mongodb
import './config/database.js'

// import routes
import { router as AuthRouter } from './routers/auth.js'
import { router as UserRouter } from './routers/user.js'
import { router as DoctorRouter } from './routers/doctor.js'
import { router as ReviewRouter } from './routers/review.js'

const app = express()
const port = process.env.PORT || 3001

const corsOption = {
  origin: true
}

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))


// mount routers
app.use('/api/auth', AuthRouter)
app.use('/api/users', UserRouter)
app.use('/api/doctors', DoctorRouter)
app.use('/api/reviews', ReviewRouter)



app.listen(port, () => {
  console.log("Server is running at", port)
})