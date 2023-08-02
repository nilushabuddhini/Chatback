const express = require('express')

const dotenv = require('dotenv').config()

const cors = require('cors')

const { default: mongoose } = require('mongoose')

const chatroutes = require('./routes/routes')

const app = express()

app.use(express.json())

app.use((req, res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/chat', chatroutes)

app.use(cors())

mongoose.connect(
    process.env.MONGO_URI
).then(
    app.listen(process.env.PORT,() => {
        console.log('app listening on port', process.env.PORT)
    })
)

