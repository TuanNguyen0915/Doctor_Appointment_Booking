// npm
import 'dotenv/config.js'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// connect mongodb
import './config/database.js'


// import routers
import { router as authRouter } from './routes/auth.js'
import { router as userRouter } from './routes/user.js'

// create app and port
const app = express()
const port = process.env.PORT || 3001

//middlewares
const corsOptions = {
  origin: true
}
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors(corsOptions))

//routes
app.use('/api/auth', authRouter) //localhost:3001/auth/
app.use('/api/user', userRouter) //localhost:3001/user/


// listen port
app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})