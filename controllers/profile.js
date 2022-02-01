const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile')
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
