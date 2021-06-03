const express =require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routesUrls=require('./routes/routes')
const cors=require('cors')
dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: process.env.DB_NAME,
  },()=>console.log("database connected"))
app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000,()=>console.log('server is runing'))