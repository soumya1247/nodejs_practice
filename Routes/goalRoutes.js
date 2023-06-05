const express = require('express')
const router = express.Router()
const { getGoals, createGoal, updateGoal, deleteGoal } = require('../Controllers/goalControllers')

// router.get('/', (req, res) => {
//     res.status(200).json({ id: 1, name: 'N1', reqType: 'GET' })
// })
// router.get('/', getGoals)

// router.post('/', (req, res) => {
//     res.status(200).json({ id: 1, name: 'N1', reqType: 'POST' })
// })

// router.post('/', createGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({ id: 1, name: 'N1', reqType: 'PUT' })
// })

// router.put('/:id', updateGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ id: 1, name: 'N1', reqType: 'DELETE' })
// })

// router.delete('/:id', deleteGoal)

// Middleware Example
const middle = (req, res, next) => {
    console.log('Middleware Ran')
    next()
}

router.route('/').get(middle, getGoals).post(createGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router