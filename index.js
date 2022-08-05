const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const morgon = require("morgan");
const MovieRoute = require("./Routers/MovieRoute");

mongoose.connect(`mongodb://localhost:27017/myDatabase`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("eror", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("database is connected");
});
const app = express();

app.use(morgon("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`port listening on ${PORT}`);
});

app.use("/", MovieRoute);
