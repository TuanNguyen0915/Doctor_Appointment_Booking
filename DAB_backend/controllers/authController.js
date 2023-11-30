import User from '../models/user.js'

export const register = async(req,res) => {
  const user = await User.findOne({email: req.body.email})
  if (user) throw new Error("Account already exist.")

  try {
    
  } catch (error) {
    
  }
}


export const login = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}