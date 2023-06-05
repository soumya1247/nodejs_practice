//Create

db.posts.insertOne({
    title: 1,
    body: 'B1',
    tags: ['T1', 'B1'],
    date: Date()
})

db.posts.insertMany([
    {
        title: 1,
        body: 'B1',
        tags: ['T1', 'B1'],
        date: Date()
    },
    {
        title: 2,
        body: 'B2',
        tags: ['T2', 'B2'],
        date: Date()
    },
    {
        title: 3,
        body: 'B3',
        tags: ['T3', 'B3'],
        date: Date()
    },
    {
        title: 4,
        body: 'B4',
        tags: ['T4', 'B4'],
        date: Date()
    },
    {
        title: 5,
        body: 'B5',
        tags: ['T5', 'B5'],
        date: Date()
    }
])

//Read

db.posts.find()
db.posts.find().sort({title : -1})
db.posts.find({title: {$gt : 3}})

//Delete

db.posts.deleteOne({title : 5})
db.posts.deleteMany({title : {$gte : 3, $lte: 4}})
db.posts.deleteMany({}, {title : {$gte : 1}})//Also Works

//Update

db.posts.updateOne({title: 2}, {$set: {body: 'B3'}})
db.posts.updateMany({title: {$gte: 1}}, {$set: {body: 'B4'}})
db.posts.updateOne({ title: 4 }, {
    $set: {
        title: 4,
        body: 'B3',
        tags: ['t3', 'b3'],
        date: Date()
    }
}, { upsert: true })

//Aggregation Pipeline

//Match

db.posts.aggregate([
    {
        $match: {title : {$gt: 2}}
    }
])

// [
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886e"),
//       title: 3,
//       body: 'B3',
//       tags: [ 'T3', 'B3' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)'
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886f"),
//       title: 4,
//       body: 'B4',
//       tags: [ 'T4', 'B4' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)'
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d60368870"),
//       title: 5,
//       body: 'B5',
//       tags: [ 'T5', 'B5' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)'
//     }
//   ]

//Join

db.posts.aggregate([
    {
        $lookup: {
            from: 'posts1',
            localField: 'body',
            foreignField: 'postsbody',
            as: 'Posts1'
        }
    }
])

// [
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886c"),
//       title: 1,
//       body: 'B1',
//       tags: [ 'T1', 'B1' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: []
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886d"),
//       title: 2,
//       body: 'B2',
//       tags: [ 'T2', 'B2' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: [
//         {
//           _id: ObjectId("6387a1211f48eb06e3c09a6a"),
//           id: 5,
//           postsbody: 'B2'
//         }
//       ]
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886e"),
//       title: 3,
//       body: 'B3',
//       tags: [ 'T3', 'B3' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: []
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886f"),
//       title: 4,
//       body: 'B4',
//       tags: [ 'T4', 'B4' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: [
//         {
//           _id: ObjectId("6387a1741f48eb06e3c09a6c"),
//           id: 5,
//           postsbody: 'B4'
//         }
//       ]
//     },
//     {
//       _id: ObjectId("638cbaf3ed68440d60368870"),
//       title: 5,
//       body: 'B5',
//       tags: [ 'T5', 'B5' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: []
//     }
//   ]

db.posts.aggregate([
    {
        $lookup: {
            from: 'posts1',
            localField: 'body',
            foreignField: 'postsbody',
            as: 'Posts1'
        }
    },
    {
        $match : {body: 'B2'}
    }
])

// [
//     {
//       _id: ObjectId("638cbaf3ed68440d6036886d"),
//       title: 2,
//       body: 'B2',
//       tags: [ 'T2', 'B2' ],
//       date: 'Sun Dec 04 2022 20:51:23 GMT+0530 (India Standard Time)',
//       Posts1: [
//         {
//           _id: ObjectId("6387a1211f48eb06e3c09a6a"),
//           id: 5,
//           postsbody: 'B2'
//         }
//       ]
//     }
//   ]
