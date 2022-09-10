const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel') // to use for put/delete => only put/delete one's own goals

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id }) // req.user.id gotten from the protect function calles by the route
    // so that to get goals from the user of right id (or token gotten from logn/create user)
    res.status(200).json(goals)
})

// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc Put goal
// @route PUT /api/goals
// @access Private
const putGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }


    //check if the token returns a valid user
    if(!reg.user){
        res.status(401)
        throw new Error('User not found')
    }
    // if valid user found, make sure logged in user matches goal's user
    if(goal.user.toString() !== reg.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    //check for user
     if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    // make sure logged in user matches goal's user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await goal.remove()
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal, 
    putGoal, 
    deleteGoal
}