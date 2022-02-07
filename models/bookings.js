const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the results moodel
module.exports = mongoose.model('bookings', {
  description: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  house: {
    type: ObjectId,
    required: true
  }
})
