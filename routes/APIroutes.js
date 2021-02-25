const router = require("express").Router();
const mongoose = require('mongoose');
const Workout = require("../models/newmodel");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) { console.log(err) }
        else { res.json(data) }
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Schema.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req);
    var target = req.params._id;
    Workout.findByIdAndUpdate(target, req.body, function(err, result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})






module.exports = router;