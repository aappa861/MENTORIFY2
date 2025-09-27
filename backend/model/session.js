const mongoose =require("mongoose")

const sessionSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    reatingandReview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
        required:true
    },
    mentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor",} 
    })

const Session = mongoose.model("Session", mentorSchema);

module.exports = Session;
