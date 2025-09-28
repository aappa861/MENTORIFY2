const mongoose =require("mongoose")

const Session=require("../model/session")
const ReatingAndReview=require("../model/Reating")

exports.createReating=async(req,res)=>{
try{
    const userId=req.user.id;
    const{sessionId,reating,review}=req.body
    if(!sessionId||!reating||!review){
        return res.status(400).json({
            success:false,
            message:"Fill All details"
        })
    }
    const alredyRating=await ReatingAndReview.findOne({user: userId, session: sessionId})
    if(alredyRating){
        return res.status(400).json({
            success:false,
            message:"You Alredy give REating this session"
        })
    }

    const Review =await ReatingAndReview.create(
       { user: userId,
         session: sessionId,
          rating: reating,
           review }

    )
    return res.status(200).json({
        success:true,
        message:"Reating Created",
        error:error.message,
        Review
    })
}
catch(error){
    return res.status(500).json({
        success:false,
        message:"Error Get in Reating Review controlller"
    })
}
}

exports.getAllReating=async(req,res)=>{
    try{
        const reating=await ReatingAndReview.find()
        .populate("user","name,email")
        .populate("Session","name price")

  return res.status(200).json({
    success:true,
    message:"Found All Reating",
    reating
  })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Get in GetAll Reating",
            error:error.message
        })
    }
}

exports.getReatingById=async(req,res)=>{
    try{
        const sessionId=req.params.id

        if(!sessionId){
            return res.status(400).json({
                success:fasle,
                message:"session not found"
            })
        }

        const reating= await ReatingAndReview.findById({session:sessionId})
        .populate("user","name email")

        if(!reating||reating===0){
            return res.status(400).json({
                success:fasle,
                message:" no found reating Founde for this Session"
            })
        }
        return res.status(200).json({
    success:false,
    message:"Found All Reating",
    reating
  }) 

    }
    catch(error){
          return res.status(500).json({
            success:false,
            message:"Error Get in GetAll Reating",
            error:error.message
        })
    }
}