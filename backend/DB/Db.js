const mongoose=require("mongoose")
const uri="mongodb+srv://SyedSameer:Sameer123@cluster0.vcs0rs1.mongodb.net/reactclass?retryWrites=true&w=majority"
const connectDB=()=>{


    return mongoose.connect(uri,{

      
      useNewUrlParser: true,
      useUnifiedTopology: true,
     

    }).then(()=>{console.log("yes")}).catch(()=>{console.log("nooooo")})

    
}
module.exports=connectDB