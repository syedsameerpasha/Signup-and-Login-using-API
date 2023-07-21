const express=require("express")
const connectDB = require("./DB/Db")
const sameer = require("./Schema/Mydata")
const app=express()
let cors = require("cors");
app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)
const PORT=4000
app.get("/",async function(req,res){


    
    const a=await sameer.find()

return res.send(a)
})

app.post("/p",async function(req,res){
    
    const a=await sameer.create(req.body)
    return res.send(a)
    
    })
app.listen(PORT,async function(){
    await connectDB()

    console.log("server is running on port 4000")
})