const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
// const moment = require('moment')
// Views
//let newDate = moment(booking.date).format('DD MM YY')
router.get('/', async (req, res, next) => {
  try {
    let house = await Houses.find(req.body)
    let search = req.query

    const filterHouses = (house, search) => {
      let filteredHouses = []
      house.forEach((h, i) => {
        if (h.rooms == search.room) {
          filteredHouses.push(h)
        }
      })
      return filteredHouses
    }

    let results = filterHouses(house, search)
    console.log(results)
    res.render('houses/list', { house, results, user: req.user })
    // console.log(filterHouses(house, search))

    // const filterHouses = house => {
    //   let filteredHouses = []
    //   if (req.query.rooms == req.body.rooms) {
    //     filteredHouses.push(req.body)
    //   }
    //   return filteredHouses
    // }
    // filterHouses(house)

    // house.forEach((h, i) => {
    // if ((h.rooms = req.query.rooms)) {

    // }
    // })
    // for (rooms in req.query) {
    //   // console.log(`${rooms} ${req.query[rooms]}`)
    // }
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
// Houses.findByIdAndDelete(req.params.id)
// in the form use action="/houses/{{houses._id}}?_mthod=patch" method="post"
// Export
module.exports = router
