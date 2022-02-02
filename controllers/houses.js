const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
// Views

router.get('/', async (req, res, next) => {
  try {
    let house = await Houses.find(req.body)
    res.render('houses/list', { house, user: req.user })
  } catch (err) {
    next(err)
  }
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    // req.body.host = req.body._id
    let house = await Houses.findById(req.params.id).populate('host')
    // console.log(house)

    res.render('houses/one', { house, user: req.user._id })
    // find houses
    // populate host
    // pass house to template
    // let house = await Houses.findById(req.params.id).populate('host')
    // res.render('houses/${house._id}', { user: req.user, house })
    // { user: req.user, house })
  } catch (err) {
    next(err)
  }
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
      // console.log(req.body)

      req.body.host = req.user._id

      // let person = {
      // 	name: 'Kris'
      // }
      // person.lastname = 'Omaha'
      // console.log(person);

      // req.body.host = req.body._id
      let house = await Houses.create(req.body)
      console.log(house)
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
