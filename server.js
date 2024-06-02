import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.get('/' , (req , res) =>{
    res.send("hello world!")
})

app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`)
})