const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        _id: {type: String, required: true},
        id: { type: Number, required: true },
        username: { type: String, required: true },
        comment: { type: String, required: true },
        discussion: { type: Object, required: true },
    },
)

module.exports = mongoose.model('comments', commentSchema)