const express= require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
require('dotenv').config()
const routes=require('./routes/taskRoute')
const cors =require('cors')
const app =express()

const PORT=process.env.PORT || 5000
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
// let corsOptions = {
//     origin :'https://mern-task-app-y711.onrender.com',
//     methods: "GET,POST,PUT,DELETE",
//  }
// app.use(cors(corsOptions))
// app.options('*',cors())
app.use(cors())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('mongo connected');
}).catch((err)=>console.log(err))
app.use('/',routes)
app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
})
