const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const StudentSchema = new Schema({
  handraised: {type: Boolean, default: false},
  name: String
})

const RoomSchema = new Schema({
  pin: { type: Number, required: true},
  roomName: { type: String, required: true },
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
  },
  students: [StudentSchema]
})
module.exports = mongoose.model('Room', RoomSchema)
