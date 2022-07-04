const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./DB/databaseindex.js')
const screenRoutes = require('./routes/screenRoutes')
const movieRoutes = require('./routes/movieRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

const viewingsRoutes = require('./routes/viewingsRoutes')
const bookingsRoutes = require('./routes/bookingRoutes')
const commentRoutes = require('./routes/comment-route.js')
const discussionRoutes = require('./routes/discussion-route.js')
const stripeRoutes = require('./stripe/stripebackend')

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
app.use(commentRoutes)
app.use(discussionRoutes)
app.use(stripeRoutes)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))