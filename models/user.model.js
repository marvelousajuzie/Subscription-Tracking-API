import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,'Username is required'],
    unique: true,
    max_length: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    max_length:225,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    min_length: 6,
  },
  
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


export default User;