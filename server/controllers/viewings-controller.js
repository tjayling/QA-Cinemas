const Viewings = require("../viewings/viewingsModel.js");

getViewingsById = async (req, res) => {
  await Viewings.findOne({ _id: req.params.id }, (err, Viewings) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Viewings) {
      return res
        .status(404)
        .json({ success: false, error: `Viewings not found` });
    }
    return res.status(200).json({ success: true, data: Viewings });
  }).catch((err) => console.log(err));
};

getViewings = async (req, res) => {
  await Viewings.find({}, (err, Viewings) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Viewings.length) {
      return res
        .status(404)
        .json({ success: false, error: `Viewings not found` });
    }
    return res.status(200).json({ success: true, data: Viewings });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getViewings,
  getViewingsById,
};
