const Movie = require("../Models/Movie");
/// get allllll
const index = (req, res, next) => {
  Movie.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res.json({ message: "err occurred" });
    });
};

//get particularrrrrrr
const show = (req, res, next) => {
  let MovieId = req.params.id;

  Movie.findById(MovieId).then((response) => {
    res.json({ response }).catch((errr) => {
      res.join({ message: "an error occured" });
    });
  });
};

// post the data
const store = (req, res, next) => {
  let movies = new Movie({
    MovieName: req.body.MovieName,
    Rating: req.body.Rating,
    Cast: req.body.Cast,
    Genre: req.body.Genre,
    ReleaseDate: req.body.ReleseDate,
  });
  movies
    .save()
    .then((response) => {
      res.json({
        message: "added succesfully",
      });
    })
    .catch((err) => {
      res.json({ message: "error catched" });
    });
};

//update the data
const update = (req, res, next) => {
  var iasd = req.params.id;

  let movie = {
    MovieName: req.body.MovieName,
    Rating: req.body.Rating,
    Cast: req.body.Cast,
    Genre: req.body.Genre,
    ReleaseDate: req.body.ReleseDate,
  };

  Movie.findByIdAndUpdate(iasd, { $set: movie })
    .then(() => {
      res.json({ message: "success" });
    })
    .catch((err) => {
      res.json({ message: "errr occured" });
    });
};

const destroy = (req, res, next) => {
  let movieID = req.params.id;

  Movie.findOneAndDelete(movieID)
    .then(() => {
      res.json({ message: "employee deleted succesfuly" });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

module.exports = { index, show, store, update, destroy };
