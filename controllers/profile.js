const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Users = require('../models/users')
// Views

router.get('/', async (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  } else {
    let userHouses = await Houses.find({ host: req.user._id })

    // ({user: host = user_id????})
    res.render('profile', { user: req.user, userHouses })
  }
})

router.patch('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      let updatedUser = await Users.findByIdAndUpdate(req.user._id, req.body, {
        new: true
      }).populate('host')
      let userHouses = await Houses.find({ host: req.user._id })
      console.log({ updatedUser })
      // if (loggedUser) {
      //   req.login(loggedUser, err => {
      //     res.redirect('/profile')
      //   })
      // } else {
      //   throw new Error('Something went wrong!')
      // }
      //
      res.redirect('/profile')
    }
  } catch (err) {
    next(err)
  }
})
// res.render(("profile?_method=patch"))
// Users.findOneAndUpdate(req.user_id, req.body, {new:true})
// req.login......
// res.redirect('/profile')

// Export
module.exports = router
