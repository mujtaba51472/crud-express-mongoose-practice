import mongoose from "mongoose";

const userSchema= mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  phone: String,
});

// save docs 

const userModel = mongoose.model('user' , userSchema)

export default userModel; 

