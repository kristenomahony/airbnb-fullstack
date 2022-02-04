const express = require('express')
const router = express.Router()
const Bookings = require('../models/bookings')
const Houses = require('../models/houses')
const Users = require('../models/users')

// Views
router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      let booking = await Bookings.create(req.body)
      console.log(booking)
      res.redirect(`/houses/${house._id}`)
    }
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
