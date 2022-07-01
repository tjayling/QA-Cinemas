const Discussion = require("../models/discussion-model.js");
let newId = 5;

createDiscussion = (req, res) => {
  const body = req.body;
  if (!body)
    return res.status(400).json({
      success: false,
      error: "You must provide a Discussion",
    });
  const discussion = new Discussion(body);
  discussion._id = newId;
  if (!discussion) return res.status(400).json({ success: false, error: err });
  discussion
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: discussion._id,
        message: "Discussion created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Discussion not created!",
      });
    });
  newId++;
};

updateDiscussion = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a discussion body to update",
    });
  }

  Discussion.findOne({ _id: req.params.id }, (err, discussion) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Discussion not found!",
      });
    }
    discussion.name = body.name;
    discussion.time = body.time;
    discussion.rating = body.rating;
    discussion
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: discussion._id,
          message: "Discussion updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Discussion not updated!",
        });
      });
  });
};

deleteDiscussion = async (req, res) => {
  await Discussion.findOneAndDelete(
    { _id: req.params.id },
    (err, discussion) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!discussion) {
        return res
          .status(404)
          .json({ success: false, error: `Discussion not found` });
      }

      return res.status(200).json({ success: true, data: discussion });
    }
  ).catch((err) => console.log(err));
};

getDiscussionById = async (req, res) => {
  await Discussion.findOne({ _id: req.params.id }, (err, discussion) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!discussion) {
      return res
        .status(404)
        .json({ success: false, error: `Discussion not found` });
    }
    return res.status(200).json({ success: true, data: discussion });
  }).catch((err) => console.log(err));
};

getDiscussions = async (req, res) => {
  await Discussion.find({}, (err, discussion) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!discussion.length) {
      return res
        .status(404)
        .json({ success: false, error: `Discussions not found` });
    }
    return res.status(200).json({ success: true, data: discussion });
  }).catch((err) => console.log(err));
};

module.exports = {
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
  getDiscussions,
  getDiscussionById,
};
