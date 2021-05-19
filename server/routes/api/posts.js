const express = require('express')
const instagramPosts = require('instagram-posts')

const router = express.Router()

let username = null

router.post('/instagramname', (req, res) => {
  console.log(req.body.userName)
  res.send(req.body.userName)
  username = req.body.userName
})

router.get('/', (req, res) => {
  ;(async () => {
    res.status(200).send(
      await instagramPosts(
        username,
        (options = {
          count: 5
        })
      )
    )
  })()
})

module.exports = router
