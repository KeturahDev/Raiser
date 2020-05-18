const express = require('express')
require('./db/mongoose')
const Room = require('./models/room')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/rooms', (req,res) => {
  const room = new Room(req.body)
  room.save().then(() => {
    res.send(room)
  }).catch((e) => {
    res.status(400).send(e)
  })
})


app.listen(port, () => {
  console.log('Server is up and ruinning ' + port)
})
