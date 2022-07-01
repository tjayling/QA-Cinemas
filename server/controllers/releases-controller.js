const Releases = require('../models/new-releases-model.js');

getNewReleaseById = async (req, res) => {
    await Releases.findOne({ _id: req.params.id }, (err, release) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!release) {
            return res
                .status(404)
                .json({ success: false, error: `New Release not found` })
        }
        return res.status(200).json({ success: true, data: release })
    }).catch(err => console.log(err))
}

getNewReleases = async (req, res) => {
    await Releases.find({}, (err, releases) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!releases.length) {
            return res
                .status(404)
                .json({ success: false, error: `New Releases not found` })
        }
        return res.status(200).json({ success: true, data: releases })
    }).catch(err => console.log(err))
}

module.exports = {
    getNewReleaseById,
    getNewReleases,
}