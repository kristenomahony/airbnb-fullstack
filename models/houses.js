const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  photos: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
