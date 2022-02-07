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
      req.body.author = req.user._id
      req.body.description = req.body.message
      // req.body.house._id = req.house._id
      let house = await Houses.findById(req.params.id)

      req.house._id = house._id
      let booking = await Bookings.create(req.body)
      res.redirect(`/houses/${house._id}`, { booking })
    }
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
