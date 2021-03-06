const Movies = require("../movies/movieModel");

createMovies = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a Movie',
      })
  }

  const movies = new Movies(body)

  if (!movies) {
      return res.status(400).json({ success: false, error: err })
  }

  movies
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: movies._id,
              message: 'Movie created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Movie not created!',
          })
      })
}

getMoviesById = async (req, res) => {
  await Movies.findOne({ _id: req.params.id }, (err, Movies) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Movies) {
      return res
        .status(404)
        .json({ success: false, error: `Movies not found` });
    }
    return res.status(200).json({ success: true, data: Movies });
  }).catch((err) => console.log(err));
};

getMovies = async (req, res) => {
  await Movies.find({}, (err, Movies) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Movies.length) {
      return res
        .status(404)
        .json({ success: false, error: `Movies not found` });
    }
    return res.status(200).json({ success: true, data: Movies });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getMovies,
  getMoviesById,
  createMovies
};
