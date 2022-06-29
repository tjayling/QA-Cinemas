const express = require('express')

const CommentsCtrl = require('../controllers/comment-controller.js')

const router = express.Router()

router.post('/comments/post', CommentsCtrl.createComment)
router.put('/comments/update/:id', CommentsCtrl.updateComment)
router.delete('/comments/delete/:id', CommentsCtrl.deleteComment)
router.get('/comments/read/:id', CommentsCtrl.getCommentById)
router.get('/comments/readAll', CommentsCtrl.getComments)

module.exports = router