const mongoose = require('mongoose');
const User = require("../model/userModel")
const Session = require('../model/session');
const userModel = require('../model/userModel');
const { imageUploder } = require("../utils/imageUpLoader")


exports.createSession = async (req, res) => {
    console.log(req.body)
    try {
        const { title, description, price, category } = req.body;

        if (!title || !description || !price || !category) {
            return res.status(400).json({
                success: false,
                message: "Fill all the details"
            });
        }

        if (!req.files || !req.files.image) {
            return res.status(400).json({
                success: false,
                message: "Image not found"
            });
        }

        const image = req.files.image;

       const imageUpload = await imageUploder(
    image,
    `${process.env.CLOUDINARY_FOLDER}/session`
);


        if (!imageUpload) {
            return res.status(400).json({
                success: false,
                message: "Image Not uploaded"
            });
        }
          console.log(req.user.id)
        const userId = req.user.id; // 👈 make sure you have an auth middleware that sets req.user
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const session = await Session.create({
            title,
            description,
            price,
            category,
            image: imageUpload.secure_url, // ✅ Cloudinary returns secure_url
            mentor: userId
        });

        return res.status(200).json({
            success: true,
            message: "Created Successfully",
            session
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occurred in createSession",
            error: error.message
        });
    }
};



exports.getAllSession = async (req, res) => {

    try {
        const session = await Session.find()
            .populate("mentor", "name email")
            .exec()

        if (!session) {
            return res.status(404).json({
                success: false,
                message: "product not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Session found",
            session
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error get in all session",
            error: error.message
        })
    }
}

exports.getSession = async (req, res) => {
    try {
        const sessionId = req.params.id; // string
        const session = await Session.findById(sessionId);

        if (!session) {
            return res.status(404).json({
                success: false,
                message: "Session not found",
            });
        }

        return res.status(200).json({
            success: true,
            session
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error get in getSession",
            error: error.message
        });
    }
};

