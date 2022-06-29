const express = require('express')

const DiscussionCtrl = require('../controllers/discussion-controller.js')

const router = express.Router()

router.post('/post/discussion', DiscussionCtrl.createDiscussion)
router.put('/update/discussion/:id', DiscussionCtrl.updateDiscussion)
router.delete('/delete/discussion/:id', DiscussionCtrl.deleteDiscussion)
router.get('/read/discussion/:id', DiscussionCtrl.getDiscussionById)
router.get('/readAll/discussion', DiscussionCtrl.getDiscussions)

module.exports = router