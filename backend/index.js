const express = require('express')
require('./db/mongoose')
const Room = require('./models/room')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.post('/rooms', (req,res) => {
  const room = new Room(req.body)
  room.save().then(() => {
    console.log('ROOM: ', room)
    // res.header('Access-Control-Allow-Origin: *')
    res.send(room)
  }).catch((e) => {
    console.log('ERROR: ', e)
    res.status(400).send(e)
  })
})


app.listen(port, () => {
  console.log('Server is up and ruinning ' + port)
})
