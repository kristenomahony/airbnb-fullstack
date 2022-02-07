const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Users = require('../models/users')
// const moment = require('moment')
// Views
//let newDate = moment(booking.date).format('DD MM YY')
router.get('/', async (req, res, next) => {
  try {
    let search = {}
    // if (req.query.room != "") {search.rooms} add each null to search {obj}
    let house = await Houses.find({
      location: req.query.location
    })

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

    res.render('houses/one', { house, user: req.user._id })
  } catch (err) {
    next(err)
  }
})
// , { user: req.user, house }
router.get('/:id/edit', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      let house = await Houses.findById(req.params.id)

      res.render('houses/edit', { user: req.user, house })
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      await res.redirect('/auth/login')
    } else {
      req.body.host = req.user._id
      let house = await Houses.create(req.body)
      res.redirect(`/houses/${house._id}`)
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      let updatedHouse = await Houses.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      )

      res.redirect(`/houses/${updatedHouse._id}`)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/login')
    } else {
      let deletedHouse = await Houses.findByIdAndDelete(req.params.id)
      res.redirect('/houses')
    }
  } catch (err) {
    next(err)
  }
})
// Houses.findByIdAndDelete(req.params.id)
// in the form use action="/houses/{{houses._id}}?_mthod=patch" method="post"
// Export
module.exports = router
