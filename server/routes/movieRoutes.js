const express = require('express')

const MoviesCtrl = require('../controllers/movie-controller.js')

const router = express.Router()

router.get('/movies/:id', MoviesCtrl.getMoviesById)
router.get('/movies', MoviesCtrl.getMovies)

module.exports = router