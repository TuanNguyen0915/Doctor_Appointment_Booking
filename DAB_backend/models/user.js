import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },
  photo: { type: String },
  role: {
    type: String,
    enum: ['patient', 'doctor'],
    default: 'patient',

  },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  bloodType: { type: String },
  appointment: { type: mongoose.Types.ObjectId, ref: 'Appointment' }
})

const User = mongoose.model('User', UserSchema)

export default User