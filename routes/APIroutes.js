const router = require("express").Router();
const Workout = require("../models/newmodel");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) { console.log(err) }
        else { res.send(data) }
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}).sort({ date: -1 })
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            res.status(404).json(err);
            console.log(res)
        });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    var target = req.params.id;
    var add = req.body;
    Workout.updateOne(
        {
            _id: target
        },
        {
            $set: {
                day: new Date().setDate(new Date().getDate()),
            },
            $push: {
                exercises: [add]
            }
        },
        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    );
})

module.exports = router;