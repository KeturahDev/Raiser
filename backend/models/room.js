const mongoose = require('mongoose')

const Room = mongoose.model('Room', {
  pin: {
    type: Number,
    required: true,
  },
  teacherPassword: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if(value.toLowerCase().includes("password")) {
        throw new Error("You cannot have a password containing 'password'.")
      }
    }
  }
})
module.exports = Room