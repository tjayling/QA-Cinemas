const express = require('express')

const ReleasesCtrl = require('../controllers/releases-controller.js')

const router = express.Router()

router.get('/newReleases/:id', ReleasesCtrl.getNewReleaseById)
router.get('/newReleases', ReleasesCtrl.getNewReleases)

module.exports = router