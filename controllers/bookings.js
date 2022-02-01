const express = require('express')
const router = express.Router()

// Views
router.post('/', (req, res) => {
	if (req.isAuthenticated()) {
		res.render('bookings')
	} else {
		res.redirect('/auth/login')
	}
  })

// Export
module.exports = router
