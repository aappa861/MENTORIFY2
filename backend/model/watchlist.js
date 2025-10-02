const mongoose =require("mongoose")
const Session = require("./session")

const watchListSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items: [
    {
      session: { type: mongoose.Schema.Types.ObjectId, ref: "Session", required: true }
    }
  ]
}, { timestamps: true });

module.exports=mongoose.model("WatchList",watchListSchema)