const express = require('express')
const router = express.Router()
// import users
// Views

router.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile', { user: req.user })
  } else {
    // ({user: host = user_id????})
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
// res.render(("profile?_method=patch"))
// Users.findOneAndUpdate(req.user_id, req.body, {new:true})
// req.login......
// res.redirect('/profile')

// Export
module.exports = router
