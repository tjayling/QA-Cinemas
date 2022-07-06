const Screens =require('../screens/screenModel');

createScreens = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Screen',
        })
    }

    const screens = new Screens(body)

    if (!screens) {
        return res.status(400).json({ success: false, error: err })
    }

    screens
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Screens._id,
                message: 'Screen created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Screen not created!',
            })
        })
}


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
    getScreensById,
    createScreens
}