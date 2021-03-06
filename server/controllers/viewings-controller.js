const Viewings = require("../viewings/viewingsModel.js");

createViewings = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a Viewing',
      })
  }

  const viewing = new Viewings(body)

  if (!viewing) {
      return res.status(400).json({ success: false, error: err })
  }

  viewing
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: Viewings._id,
              message: 'Viewing created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Viewing not created!',
          })
      })
}

getViewingsById = async (req, res) => {
  await Viewings.findOne({ id: req.params.id }, (err, Viewings) => {
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
  createViewings
};
