const express = require('express');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./Middleware/errorMiddleware')
const connectDb = require('./config/db')
const goalRoutes = require('./Routes/goalRoutes')
const userRoutes = require('./Routes/userRoutes')
const logger = require('./Events/Events')
const PORT = process.env.PORT || 5000;

connectDb()

const app = express();

//Middleware Example
// const middle = (req, res, next) => {
//     console.log('Middleware Ran')
//     next()
// }

// app.get('/api/goals/goal', middle, (req, res) => {
//     res.status(300).json({id: 1, name: 'N1'})
// })

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);
//Upto 40 mins
//EventEmitter Example
// logger.emit('event', {id: 1, name: 'N1'});
// logger.emit('event', {id: 2, name: 'N2'});
// logger.emit('event');
// logger.emit('event');
// logger.log()

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// const http = require('http')
// const server = http.createServer((req, res) => {
// })
// server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
