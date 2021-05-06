const express = require('express')
const T = require('../../../src/lib/twitter')
const twitterName = require('./twitterName')

const router = express.Router()

router.get('/', (req, res) => {
  console.log(twitterName.stack[0].params.twittername)
  T.get(
    'search/tweets',
    { from: twitterName.stack[0].params.twittername, count: 5 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json('Oops! Something went wrong.')
      }
      res.status(200).send(data)
    }
  )
})

module.exports = router
