const mongoose = require('mongoose')
const Schema = mongoose.Schema

const discussionSchema = new Schema(
    {
        _id: {type: String, required: true},
        username: { type: String, required: true },
        rating: { type: Number, required: true }, 
        comment: { type: String, required: true },
        movie: { type: Object, required: true },
    },
)

module.exports = mongoose.model('discussions', discussionSchema)