const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./DB/databaseindex.js')
const screenRoutes = require('./routes/screenRoutes')
const movieRoutes = require('./routes/movieRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const viewingsRoutes = require('./routes/viewingsRoutes')
const bookingsRoutes = require('./routes/bookingRoutes')

const commands = require('./commands.js')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

commands;

app.use(screenRoutes)
app.use(movieRoutes)
app.use(paymentRoutes)
app.use(viewingsRoutes)
app.use(bookingsRoutes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))