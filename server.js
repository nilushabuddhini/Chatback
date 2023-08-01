const express = require('express')

const dotenv = require('dotenv').config()

const chatroutes = require('./routes/routes')

const { default: mongoose } = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/chat', chatroutes)

// app.use(cors({
//     origin:[
//         "https://chat-with-earth.onrender.com"
//     ]
// }))

mongoose.connect(
    process.env.MONGO_URI
).then(
    app.listen(process.env.PORT,() => {
        console.log('app listening on port', process.env.PORT)
    })
)

