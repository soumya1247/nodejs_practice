const eventEmitter = require('events');
const path = require('path');
const fs = require('fs');
const { exit } = require('process');

class myEmitter extends eventEmitter {}

const logger = new myEmitter()
logger.on('event', (data) => {
    console.log('Event Fired')
    // fs.appendFile(path.join(__dirname, '/', 'Logger.js'), JSON.stringify(data), err => {
    //     if (err) {
    //         console.error(err.message)
    //     }
    // })//should not be run with nodemon which will cause infinite loop.Should be used by node index.js
    console.log(data)
})

logger.log = function() {
    logger.emit('event', {id: 1, name: 'N1'});
    logger.emit('event', {id: 2, name: 'N2'});
}

module.exports = logger

// const ex = async() => {
//     try{
//         const exres = await sometask
//         console.log(exres)
//     }catch(e) {
//         console.error(e.message)
//     }
// }

// ex()

// const ex = new Promise((res, rej) => {
//     if (sometask) {
//         res('Done')
//     }
//     rej('Error')
// }).then((exres) => console.log(exres)).catch((e) => console.error(e.message))

// Function.prototype.myCall = function(context = {}, ...args) {
//     if (typeof fn !== 'function') {
//         throw new Error(this + 'is not a function')
//     }

//     context.fn = this
//     context.fn(...args)
// }

// const ex1 = {name: 1, age: 5}
// const ex2 = {
//     name: 2,
//     age: 6,
//     myCall1: function(title) {
//         console.log(this.name, this.age, title)
//     }
// }

// ex2.myCall1.myCall(ex1, 'T1')