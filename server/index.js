const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const tweets = require('./routes/api/tweets')

app.use('/api/tweets', tweets)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('server/public/'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'server', 'public', 'index.html'))
  })
  // app.use(express.static(__dirname + '/public/'))
  // app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 8081

app.listen(port, () => console.log(`Server started on port ${port}`))
