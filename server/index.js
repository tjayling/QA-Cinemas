const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./DB/databaseindex.js')
const screenRoutes = require('./routes/screenRoutes')
const commands = require('./commands.js')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

commands;
app.use('/api', screenRoutes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))