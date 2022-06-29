const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        id: { type: Number, required: true },
        username: { type: String, required: true },
        comment: { type: String, required: true },
        discussion: { type: Object, required: true },
    },
)

module.exports = mongoose.model('comments', commentSchema)