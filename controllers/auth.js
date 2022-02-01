const express = require('express')
const router = express.Router()
const passport = require('passport')

// Views
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})
router.get('/logout', (req, res) => {
  res.redirect('/login')
})
router.post('/login', async (req, res) => {
  res.redirect('/houses')
})
const Users = require('../models/users')

router.post('/signup', async (req, res, next) => {
  try {
    let foundUser = await Users.findOne({ email: req.body.email })
    if (foundUser) {
      throw new Error('User already exists!')
    } else {
      let user = await Users.create(req.body)
      req.login(user, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/houses')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
