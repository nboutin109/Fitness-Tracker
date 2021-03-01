const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Router = require("express").Router();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://Thisuser:Workout1@cluster0.z0iis.mongodb.net/Workouts?retryWrites=true&w=majority", {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(require("./routes/APIroutes.js"));
app.use(require("./routes/HTMLroutes.js"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("open!")
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
