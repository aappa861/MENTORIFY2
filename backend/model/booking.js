const mongoose=require("mongoose")

const bookingSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentor"
    },
     items: [
    {
      session: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true },
      
      price: { type: Number, required: true } 
    }
  ],
   date: {
    type: Date,
    default: Date.now
  }

})

module.exports=mongoose.model("BookSession",bookingSchema)