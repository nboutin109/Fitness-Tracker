var express = require('express')
const router = express.Router();
const path = require("path");

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  });


router.get("/exercise", function(req, res) {
res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

router.get("/stats", (req, res) => {
res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;