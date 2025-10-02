const mongoose = require('mongoose');
const User=require("../model/userModel")
const Session = require('../model/session');
const userModel = require('../model/userModel');
const { uploadImageToCloudinary } = require("../utils/imageUpLoader")


exports.createSession = async (req, res) => {
    try {
        const { title, description, price, category } = req.body;
        if (!title || !description || !price || !category) {
            return res.staus(400).json({
                success: false,
                message: "Fill all the details"
            })
        }
        if (!req.files || req.files.image) {
            return res.status(400).json({
                success: false,
                message: "Image not get"
            })
        }
        const image = req.files.image

        const imageUplode = await uploadImageToCloudinary(image,
            process.env.FOLDER_NAME, "/session"
        )

        if (!imageUplode) {
            return res.status(400).json({
                success: false,
                message: "Image Not uploaded"
            })
        }
        const userId = req.user.userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "mentor not found"
            })
        }

        const session = await Session.create(
            {
                title,
                description,
                price,
                category,
                image: imageUplode.url,
            }
        )
        await User.findByIdAndUpdate(
            userId,
            { accountType: "mentor" },
            { new: true }
        );
        return res.status(200).json({
            success: true,
            message: "Created Succesfully",
            session
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occurred in createSession",
            error: error.message
        });
    }
}


exports.getAllSession=async(req,res)=>{

  try{
      const session=await Session.find()
    .populate("mentor" ,"name email")
    .exec()

    if(!session){return res.status(404).json({
        success:false,
        message:"product not found"
    })}

    return res.status(200).json({
        success:true,
        message:"Session found",
        session
    })
  }
catch(error){
    return res.status(500).json({
        success:false,
        message:"Error get in all session",
        error:error.message
    })
}
}

exports.getSession=async(req,res)=>{
    try{
        const sessionId=req.params
        if(!sessionId){
            return res.status(404).json({
                success:false,message:"session not found"
            })}
      const session=await Session.findById(sessionId)
      .populate("mentor","name email")
      .exec()
      
      if(!session){
        return res.status(404).json({
            success:false,
            message:"Session not found"
        })}
          
        return res.status(200).json({
            success:true,
            message:"session founr",
            session
        })
            
    }
    catch(error){
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Error get in getSession"
        })
    }
}
