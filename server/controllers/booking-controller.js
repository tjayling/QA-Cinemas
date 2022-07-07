const Bookings = require('../bookings/bookingsModel.js');

createBookings = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Bookings',
        })
    }

    const Bookings = new Bookings(body)

    if (!Bookings) {
        return res.status(400).json({ success: false, error: err })
    }

    Bookings
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: Bookings._id,
                message: 'Bookings created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Bookings not created!',
            })
        })
}

getBookingsById = async (req, res) => {
    await Bookings.findOne({ _id: req.params.id }, (err, Bookings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Bookings) {
            return res
                .status(404)
                .json({ success: false, error: `Bookings not found` })
        }
        return res.status(200).json({ success: true, data: Bookings })
    }).catch(err => console.log(err))
}

getBookings = async (req, res) => {
    await Bookings.find({}, (err, Bookings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Bookings.length) {
            return res
                .status(404)
                .json({ success: false, error: `Bookings not found` })
        }
        return res.status(200).json({ success: true, data: Bookings })
    }).catch(err => console.log(err))
}

module.exports = {
    createBookings,
    getBookingsById,
    getBookings
}