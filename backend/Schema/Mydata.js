const mongoose=require("mongoose")
const mydata=new mongoose.Schema({
     name:{type:String},
     age:{type:Number}

})
const sameer=mongoose.model("reemas",mydata)
module.exports=sameer