const Screens =require('../screens/screenModel');


getScreensById = async (req, res) => {
    await Screens.findOne({ _id: req.params.id }, (err, Screens) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Screens) {
            return res
                .status(404)
                .json({ success: false, error: `Screens not found` })
        }
        return res.status(200).json({ success: true, data: Screens })
    }).catch(err => console.log(err))
}

getScreens = async (req, res) => {
    await Screens.find({}, (err, Screens) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Screens.length) {
            return res
                .status(404)
                .json({ success: false, error: `Screens not found` })
        }
        return res.status(200).json({ success: true, data: Screens })
    }).catch(err => console.log(err))
}

module.exports = {
    getScreens,
    getScreensById
}