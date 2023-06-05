// let myName: string = 'SR';
// let num: number = 45
// let anyType: string | number | boolean = 45

// num = 42
// anyType = true

// const sum = (a : number, b: string) : string => {
//     return a + b
// }

// let post : string | number

// let re : RegExp = /\w+/g

// let sArr: string[] = ['A', 'B', 'C']
// let gui: (string | number)[] = ['s', 'l', 123]
// let gui2: (string | number | boolean)[] = ['s', true, 123]

// gui2 = gui

// let test = []

// let newTuple: [string, number, boolean] = ['A', 7, false]
// newTuple[1] = 6

// let myObj: Object
// myObj = []
// console.log(typeof myObj)

// const exampleObj = {
//     p1: 'D',
//     p2: true
// }

// type Gui = {
//     name: string,
//     active?: boolean,
//     alb: (string | number)[]
// }

// interface GuiI {
//     name?: string,
//     active: boolean,
//     alb: (string | number)[]
// }

// let evh: GuiI = {
//     name: 'E',
//     active: false,
//     alb: [7, 'fff', 88]
// }

// let evj : GuiI = {
//     active: false,
//     alb: [7, 'fff', 88]
// }

// evh = evj

// const greet = (guitarist: GuiI) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name?.toUpperCase()}`
//     }
//     return 'Hello!'
// }

// console.log(greet(evj))

// enum Grade {
//     A = 1,
//     B,
//     C,
//     D = 6,
//     E
// }

// console.log(Grade.A)
// console.log(Grade.D)

// type GuiT = {
//     name?: string,
//     active: boolean,
//     alb: (string | number)[]
// }

// interface GuiI {
//     name?: string,
//     active: boolean,
//     alb: (string | number)[]
// }

// let myName: 'SR'

// let userName : 'SR' | "ST" | 'SY'
// userName = 'S' //Will show error
// userName = 'SR' //Will not

// const add = (a: number, b: number) => {
//     return a + b
// }

// const sub = (a: number, b: number) : number => {
//     return a - b
// }


// const log = (message: any) : void => {
//     console.log(message)
// }

// type mathFunc = (a: number, b: number) => number
// interface mathFunc {
//     (a: number, b: number) : number
// } 


// let mul: mathFunc = (a, b) => {
//     return a * b
// } 

// const addAll = (a: number, b: number, c?: number) : number => {
//     if(typeof c != 'undefined'){
//         return a + b + c
//     }
//     return a + b
// }

// const sumAll = (a: number, b: number, c: number = 2) : number => {
//     return a + b + c
// }

// log('Hello')
// log(add(2, 3))
// log(sub(5, 3))
// log(mul(5, 3))
// log(addAll(5, 3))
// log(addAll(5, 3, 5))
// log(sumAll(5, 3))
// // log(sumAll(3, 90))

// // let nums: number[] = [5, 3, 5, 90]

// // const total = (nums: number[]) : number => {
// //     return nums.reduce((prev, curr) => prev + curr)
// // }

// // log(total(nums))

// const total = (a: number, ...nums: number[]) : number => {
//     return a + nums.reduce((prev, curr) => prev + curr)
// }

// log(total(1000, 5, 3, 5, 90))


// const createError = (e: string) => {
//     throw new Error("e");
// }

// const infinite = () => {
//     let i: number = 1
//     while(true) {
//         i++
//         if (i > 100) break
//     }
// }

// const isN = (value: any) : boolean => {
//     return typeof value === 'number' ? true : false
// }

// const numberOrString = (value: number | string) : string => {
//     if (typeof value === 'string') return 'string'
//     if (isN(value)) return 'number'
//     return createError('This shouldnt happended' )
// }