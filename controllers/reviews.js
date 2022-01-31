const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('profile')
})
router.post('/', (req, res) => {
  res.render('hello')
})
// Export
module.exports = router
