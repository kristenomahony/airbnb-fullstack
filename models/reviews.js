const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('reviews', {
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
    required: true
  },
  house: {
    type: ObjectId,
    required: true
  }
})
