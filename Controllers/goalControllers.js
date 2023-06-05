const asyncHandler = require('express-async-handler')

const Goal = require('../Model/goalModel')

exports.getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    // res.status(200).json({ id: 1, name: 'N1', reqType: 'GET' })
    res.status(200).json(goals)
})

exports.createGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
    // res.status(200).json({ id: 1, name: 'N1', reqType: 'POST' })
})

exports.updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Request No')
    }
    const goalUpdated = await Goal.findByIdAndUpdate(req.params.id, {
        text: req.body.text
    })
    res.status(200).json(goalUpdated)
    
})

exports.deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Request No')
    }
    const goalDeleted= await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json(goalDeleted)
})
