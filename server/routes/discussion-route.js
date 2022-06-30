const express = require('express')

const DiscussionCtrl = require('../controllers/discussion-controller.js')

const router = express.Router()

router.post('/discussion/post', DiscussionCtrl.createDiscussion)
router.put('/discussion/update/:id', DiscussionCtrl.updateDiscussion)
router.delete('/discussion/delete/:id', DiscussionCtrl.deleteDiscussion)
router.get('/discussion/read/:id', DiscussionCtrl.getDiscussionById)
router.get('/discussion/readAll', DiscussionCtrl.getDiscussions)

module.exports = router