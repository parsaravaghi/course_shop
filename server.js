import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/course_shop')

const userSchema = new mongoose.Schema({
    username : String , 
    passwordHash : String , 
    phonenumber : String
})

const user = mongoose.model("User" , userSchema)

const app = express()
const port = 3000

app.get('/' , (req , res) =>{
    res.send("hello world!")
})

app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`)
})