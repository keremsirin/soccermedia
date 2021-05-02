const express = require('express')
const T = require('../../../src/lib/twitter')

const router = express.Router()

router.get('/', (req, res) => {
  const deneme = 'kasimahmetakif'
  const bunu = T.get(
    'search/tweets',
    { from: deneme, count: 5 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json('Oops! Something went wrong.')
      }
      res.status(200).send(data)
    }
  )
})

module.exports = router
