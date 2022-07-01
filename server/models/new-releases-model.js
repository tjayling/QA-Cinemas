const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const releasesSchema = new Schema(
    {
        _id: {type: String, required: true},
        id: {type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        release_date: { type: String, required: true },
        length: { type: String, required: true },
        actors: { type: String, required: true },
        directors: { type: String, required: true },
        img_link: { type: String, required: true },
    }
)
module.exports = mongoose.model('releases', releasesSchema);