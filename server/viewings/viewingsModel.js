const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Viewings = new Schema(
    {
        _id: {type: String, required: true},
        id:{type: Number, required: true },
        time: { type: String, required: true },
        screen: { type: Object, required: true },
        movie: { type: Object, required: true},
        
        
    }
)
module.exports = mongoose.model('viewings', Viewings);