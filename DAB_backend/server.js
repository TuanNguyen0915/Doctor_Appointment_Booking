import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv/config'

import './config/database.js'

const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/', (req, res) => {
  res.status(200).send({
    message: "server running"
  })
})

// listen port
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})