const express =require("express")
require("dotenv").config()
const db=require("./db/db")
const router=require("./router/router")
const port=process.env.port
const app=express()
app.use(express.json())
app.use(router) 
 
app.listen(port,()=>{
    console.log("server is running on port "+ port)
})
