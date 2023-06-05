const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../Model/userModel1')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please Fill all the Details')
    }

    const user = await User.findOne({ email })

    if(user) {
        res.status(400)
        throw new Error('Existing user present')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            token: generateToken(newUser._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
    
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid User During Login')
    }
})

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Me Route'})
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = { registerUser, loginUser, getMe }