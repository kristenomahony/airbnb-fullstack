const express = require('express')
const router = express.Router()

// Views
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})
router.get('/logout', (req, res) => {
  res.render('logout')
})
router.post('/login', async (req, res) => {
  res.render('login')
})

router.post('/signup', async (req, res) => {
  res.render('signup')
})
// Export
module.exports = router
