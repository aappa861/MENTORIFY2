const mongoose=require("mongoose")
const react = require("react")

const reatingSchema=new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,required:true,ref:"User"
},
Session:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Seesion'
},
reating:{
    type:Number,required:true
},
review:{
    type:String,required:true
}
})

module.exports=mongoose.model("Reating",reatingSchema)