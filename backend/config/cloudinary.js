const mongoose =require("mongoose");
const cloudinary = require('cloudinary').v2;

const cloudinationConfig =() => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
    }
     catch(error){
        console.error("Error configuring Cloudinary:", error);
        throw new Error("Cloudinary configuration failed");
    }
   
    }
