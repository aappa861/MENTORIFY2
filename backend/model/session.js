const mongoose =require("mongoose");
const User = require("./userModel");
const Mentor = require("./mentorModel");

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
    category:{
        type:String,
        required:true

    },
    ratingandreview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
        required:true
    },
    mentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentor"
    },
    imagelink:{
        type:String,
        required:true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    

    })
    

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
