const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Screens = new Schema(
    {
        id: {type: Number, required: true },
        capacity: { type: Number, required: true },
        screensize: { type: String, required: true },
    },
)

module.exports = mongoose.model('screens', Screens)