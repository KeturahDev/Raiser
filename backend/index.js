const express = require('express')
require('./db/mongoose')
const Room = require('./models/room')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.post('/rooms', (req,res) => {
  const room = new Room(req.body)
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


app.listen(port, () => {
  console.log('Server is up and ruinning ' + port)
})
