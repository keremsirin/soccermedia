const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const tweets = require('./routes/api/tweets')

app.use('/api/tweets', tweets)

const port = process.env.PORT || 8081

app.listen(port, () => console.log(`Server started on port ${port}`))
