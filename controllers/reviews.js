const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('profile')
})
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/houses')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
