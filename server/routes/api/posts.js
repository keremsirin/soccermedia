const express = require('express')
const Instagram = require('instagram-web-api')
const instagramPosts = require('instagram-posts')
const axios = require('axios')

const router = express.Router()

let userName = null

router.post('/instagramname', (req, res) => {
  console.log(req.body.userName)
  res.send(req.body.userName)
  userName = req.body.userName
})

router.get('/', (req, res) => {
  // axios.get('https://www.instagram.com/cakirugurcan61/?__a=1').then((res) => {
  //   console.log(res)
  // })
  const Instagram = require('instagram-web-api')
  const username = 'soccer___media'
  const password = 'xxx'

  const client = new Instagram({ username, password })

  ;(async () => {
    await client.login()
    const profile = await client.getUserByUsername({
      username: userName
    })
    // console.log(profile)
    res.status(200).send(profile)
    // await client.logout()
  })()

  // ;(async () => {
  //   res.status(200).send(
  //     await instagramPosts(
  //       userName,
  //       (options = {
  //         count: 5
  //       })
  //     )
  //   )
  // })()
})

module.exports = router
