const express = require('express')
const router = express.Router()

// Views
router.post('/', (req, res) => {
  res.render('bookings')
})

// Export
module.exports = router
