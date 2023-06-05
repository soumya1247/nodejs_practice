const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.header.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]

            jwt.verify(token, process.env.JWT_SECRET)
            next()
        }catch(e) {
            console.error(e)
            res.status(401)
            throw new Error('Auth Error')
        }
        
    }
    
    if(!token) {
        res.status(401)
        throw new Error('No Token Passed')
    }

    
})

module.exports = { protect }