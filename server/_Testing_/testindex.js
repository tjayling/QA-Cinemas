const express = require("express"); // importing express
const mongoose = require("mongoose"); // importing mongoose

const bodyParser = require("body-parser");
const cors = require("cors");

const myapp = express(); // initialising it
myapp.use(cors());
myapp.use(bodyParser.json()); // converts the request body from JSON (res => res.json())

// get routes - add all the routes here
const screenRouter = require("../routes/screenRoutes");
const movieRouter = require("../routes/movieRoutes");
const discussionRouter = require("../routes/discussion-route");
const commentRouter = require("../routes/comment-route");
<<<<<<< HEAD
=======
const bookingRouter = require("../routes/bookingRoutes");
const viewingRouter = require("../routes/viewingsRoutes");
>>>>>>> 45d5797eb72e87d846f6ad036fab9b04c7b24f8f

myapp.use(screenRouter);
myapp.use(movieRouter);
myapp.use(discussionRouter);
myapp.use(commentRouter);
<<<<<<< HEAD
=======
myapp.use(bookingRouter);
myapp.use(viewingRouter);
>>>>>>> 45d5797eb72e87d846f6ad036fab9b04c7b24f8f


// myapp.use("*", (req, res, next) => next({ status: 404, message: "Invalid url" })); // catches 404's

// myapp.use((err, req, res, next) => {
//   res.status(err.status ? err.status : 500).send(err.message);
// });

mongoose.connect(
  "mongodb://localhost:27017/cinemaTest",
  { useNewUrlParser: true },
  (err) => {
    if (err) return console.error(err);
    return console.log("Connection successful");
  }
);

const myserver = myapp.listen(5000, () =>
  console.log("Server started on", myserver.address().port)
);

module.exports = myserver;