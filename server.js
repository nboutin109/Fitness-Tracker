const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Router = require("express").Router();
const htmlroutes = require("./routes/HTMLroutes")
const apiroutes = require("./routes/APIroutes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use("/", htmlroutes);
app.use("/", apiroutes);
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useFindAndModify: false, useUnifiedTopology: true } );

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
