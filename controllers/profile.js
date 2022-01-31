const express = require('express')
const router = express.Router()

// Views
router.get('/', (req, res) => {
  res.render('profile')
})
router.get('/', (req, res) => {
  res.render('profile')
})
router.patch('/:id', (req, res) => {
  res.render('hello')
})
// Export
module.exports = router
