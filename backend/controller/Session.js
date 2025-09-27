const mongoose = require('mongoose');
const Session = require('../model/session');
const userModel = require('../model/userModel');


exports.createSesion=async (req,res)=>{
    try{
        const { title, description, Price } = req.body;
        
    }
    catch(error){
        return res.status(500).json({ 
            success: false, 
            message: "Error occurred in createSession", 
            error: error.message 
        });
    }
}