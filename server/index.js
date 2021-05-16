const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const tweets = require('./routes/api/tweets')
const twitterName = require('./routes/api/twitterName')

app.use('/api/tweets', tweets)
app.use('/api/twittername/', twitterName)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 8081

app.listen(port, () => console.log(`Server started on port ${port}`))
