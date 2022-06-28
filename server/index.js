const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./DB/databaseindex.js')
const screenRoutes = require('./routes/screenRoutes')
const movieRoutes = require('./routes/movieRoutes')
const commands = require('./commands.js');


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

commands;
app.use('/api', screenRoutes)
app.use(movieRoutes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))