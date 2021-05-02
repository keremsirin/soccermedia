const express = require('express')
const T = require('../../../src/lib/twitter')
// const deneme2 = require('')

const router = express.Router()

router.get('/', (req, res) => {
  const deneme = 'kasimahmetakif'
  const bunu = T.get(
    'search/tweets',
    { from: deneme, count: 2 },
    function (err, data, response) {
      res.send(data)
      // res.json(JSON.stringify(data.statuses))
      // console.log(process.env.VUE_APP_TWITTER_CONSUMER_KEY)
    }
  )
})

module.exports = router
