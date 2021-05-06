const express = require('express')
const router = express.Router()

router.get('/:twittername', (req, res) => {
  res.send(req.params.twittername)
})

module.exports = router
