const express = require("express");

const DiscussionCtrl = require("../controllers/discussion-controller.js");

const router = express.Router();

router.post("/discussion/post", DiscussionCtrl.createDiscussion);
router.put("/discussion/update/:id", DiscussionCtrl.updateDiscussion);
router.delete("/discussion/delete/:id", DiscussionCtrl.deleteDiscussion);
router.get("/discussion/:id", DiscussionCtrl.getDiscussionById);
router.get("/discussion", DiscussionCtrl.getDiscussions);

module.exports = router;
