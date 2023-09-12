const mongoose=require("mongoose")
const JokesSchema=new mongoose.Schema({
joke:{type : String}
})
module.exports=mongoose.model("jokes",JokesSchema)