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
    price:{
        type:Number,
        required:true
    },
    category:{
<<<<<<< HEAD
        //type:String,
       // required:true

   // },
    //ratingandreview:{
=======
    //     type:String,required:true
    // },
    // Image:{
    //     type:String,
    //     required:true
    // },
    // reatingandReview:{
>>>>>>> feature/frontend
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
    

//const Session = mongoose.model("Session", sessionSchema);

//const Session = mongoose.model("Session",sessionSchema);


module.exports = Session;
