const express = require('express')
const router = express.Router()

// Views

router.get('/', (req, res) => {
  res.render('houses/list')
})
router.get('/create', (req, res) => {
  res.render('houses/create')
})
router.get('/:id', (req, res) => {
  res.render('houses/edit')
})
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
})
router.post('/', (req, res) => {
  res.render('house')
})
router.patch('/:id', (req, res) => {
  res.render('edit')
})
router.delete('/:id', (req, res) => {
  res.send('house')
})
// Export
module.exports = router
