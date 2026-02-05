import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("hello from linux...")
})

app.listen(3000,()=>{
    console.log("server is runninng at port 3000..")
})