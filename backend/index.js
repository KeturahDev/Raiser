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
  }).catch((e, room) => {
    res.status(400).send(e)
  })
})

app.get('/room', (req, res) => {
  Room.find(req.body).then((room) => { //req.body will be {"pin": 11111}
    console.log(res)
    // if (res.body === undefined) {
    //   throw new Error("Room does not exist")
    // } else {
      res.send(room)
    // }
  }).catch((e) => {
    console.log("unnable to GET room::: ", e)
    res.status(500).send(e)
  })
  // console.log("Got it!  ",req.body)
})


app.listen(port, () => {
  console.log('Server is up and ruinning ' + port)
})
