const express = require('express')
require('./db/mongoose')
const Room = require('./models/room')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

// ROOMS
app.post('/rooms', (req,res) => {
  const room = new Room(req.body)
  //conditional here to see if pin is already in db?
  room.save().then(() => {
    res.status(201).send(room)
  }).catch((e) => {
    res.status(400).send(e)
    throw new Error(e)
  })
})

app.get('/room', (req, res) => {
  let pinQ = req.query.pin
  Room.find({pin: pinQ}).then((room) => {
    // console.log(res)
    // if (res.body === undefined) {
    //   throw new Error("Room does not exist")
    // } else {
      res.send(room)
    // }
  }).catch((e) => {
    console.log("unnable to GET room::: ", e)
    res.status(500).send(e)
  })
})

// ================= STUDNETS =================

// creating  
app.post('/room/:id/students', (req, res) => {
  const _id = (req.params.id)
  Room.findById(_id).then((currentRoom) => {
    currentRoom.students.push(req.body)
    currentRoom.save().then(()=>{
      res.status(201).send(currentRoom)
    })
  }).catch((e) => {
    console.log(e)
    res.status(200).send(e)
  })
})

// handraising
app.patch('room/5ecab4a703b947065b170052/students/5ecab4cc03b947065b170053', (res, req) => {
// app.put('room/:id/students/:studentid', (res, req) => {
  // const _id = (req.params.id)
  // const _student_id = (req.params.studentid)
  Room.findById('5ecab4a703b947065b170052').then((room) => {
    room.Student.findByIdAndUpdate('5ecab4cc03b947065b170053', { handraised: true }).then((student) => {
      console.log("Got student: ", student)
      return student.CountDocuments({handraised: true}) // res.send("Got student: ", student)
    }).then((result) => {
      console.log(result)
    }).catch((e) => {
      res.send("unable to find student", e)
      console.log("ERROR: ", e)
    })
  }).catch((e) => {
    console.log("ERROR: ", e)
    res.send("unable to find room", e) 
  })

})

app.listen(port, () => {
  console.log('Server is up and ruinning ' + port)
})
