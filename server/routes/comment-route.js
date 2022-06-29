const express = require('express')

const CommentsCtrl = require('../controllers/comment-controller.js')

const router = express.Router()

router.post('/post/comments', CommentsCtrl.createComment)
router.put('/update/comments/:id', CommentsCtrl.updateComment)
router.delete('/delete/comments/:id', CommentsCtrl.deleteComment)
router.get('/read/comments/:id', CommentsCtrl.getCommentById)
router.get('/readAll/comments', CommentsCtrl.getComments)

module.exports = router