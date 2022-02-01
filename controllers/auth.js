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
  res.render('logout')
})
router.post('/login', async (req, res) => {
  res.render('login')
})
const Users = require('../models/users')

router.post('/signup', async (req, res, next) => {
  try {
    let user = await Users.create(req.body)
    req.login(user, err => {
      if (err) {
        throw err
      } else {
        res.redirect('/houses')
      }
    })
  } catch (err) {
    next(err)
  }
})
// req.login(user, err => {
//   if (Users.findOne({ email: req.body.email })) {
//     throw new Error('user already exists!')
//   }
//   next(err)
// })

// }

module.exports = router
