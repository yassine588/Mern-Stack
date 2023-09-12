const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    name:{type:String},
    home_state:{type:String},
    lucky_number:{type:Number},
    birthday:{day:{type:Number},month:{type:Number},year:{type:Number}}
},{timestamps:true})
module.exports=mongoose.model("student",studentSchema)