const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
// Views

router.get('/', (req, res) => {
  res.render('houses/list', { user: req.user })
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', (req, res) => {
  // find houses
  // populate host
  // pass house to template
  // let house = await Houses.findById(req.params.id).populate('host')

  res.render('houses/one')
})
// , { user: req.user, house }
router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      await res.redirect('/auth/login')
    } else {
      // req.body.host = req.body._id
      let house = await Houses.create(req.body)
      res.redirect(`/houses/${house._id}`)
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/one')
  } else {
    res.redirect('/auth/login')
  }
})
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/one')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
