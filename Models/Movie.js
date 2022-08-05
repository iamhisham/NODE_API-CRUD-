const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = new schema({
  MovieName: { type: String },
  Rating: { type: Number },
  Cast: { type: Array },
  Genre: { type: String },
  ReleaseDate: { type: String }, // type : Date ,
});

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
