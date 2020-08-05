const router = require("express").Router();
const mongoose = require("mongoose");
var path = require("path");
const Schema = require("../models/newmodel.js");

router.get("/api/workouts/range", (req, res) => {
    Schema.find({}, (err, data) => {
        if (err) {console.log(err)}
        else {res.json(data)}
    });
});
    
router.get("/api/workouts", (req, res) => {
    Schema.find()
    .then((Data) => {
        res.json(Data)
    });
});

router.post("/api/workouts", (req, res) => {
    Schema.create({}).then(
        (Data) => res.json(Data))
});

router.put("/api/workouts/:id", (req, res) => {
    Schema.findOneAndUpdate(req.params.id, {$push:{exercises: req.body}}).then(
        (Data) => res.json(Data)
    )
});





module.exports = router;