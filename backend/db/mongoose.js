const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {
  console.log("connection established")
}).catch((e) => {
  console.log("unable to connect: " + e)
})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))