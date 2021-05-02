require('dotenv').config()

const Twit = require('twit')

const T = new Twit({
  consumer_key: process.env.VUE_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.VUE_APP_TWITTER_CONSUMER_SECRET,
  access_token: process.env.VUE_APP_TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.VUE_APP_TWITTER_ACCESS_TOKEN_SECRET
  // timeout_ms: 60 * 1000,
  // strictSSL: true
})

module.exports = T
