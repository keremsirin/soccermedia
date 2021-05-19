const express = require('express')
const T = require('../../../src/lib/twitter')

const router = express.Router()

let username = null

router.post('/twittername', (req, res) => {
  console.log(req.body.userName)
  res.send(req.body.userName)
  username = req.body.userName
})

router.get('/', (req, res) => {
  T.get(
    'statuses/user_timeline',
    { screen_name: username, count: 5 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json('Oops! Something went wrong.')
      }
      res.status(200).send(data)
    }
  )
})

module.exports = router
