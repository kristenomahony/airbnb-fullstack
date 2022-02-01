const express = require('express')
const router = express.Router()
const passport = require('passport')
const Users = require('../models/users')

// Views
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/logout', (req, res, next) => {
  try {
    req.logout()
    req.session.destroy(err => {
      if (err) {
        next(err)
      }
      res.clearCookie('connect.sid')
      res.redirect('/auth/login')
    })
  } catch (err) {
    throw err
  }
})

router.post('/login', async (req, res, next) => {
  try {
    let loggedUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (loggedUser) {
      req.login(loggedUser, err => {
        res.redirect('/houses')
      })
    } else {
      throw new Error('Email or password is wrong!')
    }
  } catch (err) {
    next(err)
  }
})

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
