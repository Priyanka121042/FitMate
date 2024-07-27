const express = require('express')
//const Workout = require('../models/workoutModel')
const {createWorkout,getWorkouts, getWorkout, deleteWorkout, updateWorkout}=require('../controllers/workoutController')
const router = express.Router()

// router.get('/', (req, res)=>{
//    res.json({mssg: 'GET all workouts'})
// })

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router

//"66a507b4bbb6ed3407d12578"