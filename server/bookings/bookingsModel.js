const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bookings = new Schema(
    {
        id:{type: Number, required: true },
        email: { type: String, required: true },
        viewing: { type: Object, required: true },    
    }
)
module.exports = mongoose.model('bookings', Bookings);