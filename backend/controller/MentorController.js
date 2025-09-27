const mongoose =require("mongoose")
const Mentor = require("../model/mentorModel");
const User = require("../model/userModel");

exports.mentorRegister = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, phone, bio, expertise } = req.body;

    // Check required fields
    if (!name || !email || !phone || !bio || !expertise) {
      return res.status(400).json({
        success: false,
        message: "Fill all the details",
      });
    }

    // Check if mentor already exists for this user
    const existingMentor = await Mentor.findOne({ mentor: userId });

    if (existingMentor) {
      return res.status(400).json({
        success: false,
        message: "Mentor already registered",
      });
    }

    // Create new mentor entry
    const newMentor = await Mentor.create({
      name,
      email,
      phone,
      bio,
      expertise,
      mentor: userId,
    });

    // Update user role
    await User.findByIdAndUpdate(
      userId,
      { accountType: "mentor" },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "Mentor created successfully",
      mentor: newMentor,
    });

  } catch (error) {
    console.error("Mentor error:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred in mentor Register",
      error: error.message,
    });
  }
};
 


// Update restaurant
exports.updateMentor = async (req, res) => {
  try {
    const userId = req.user.id;

      const mentor = await Mentor.findOneAndUpdate(
      { owner: userId },       // filter
      req.body,                // update fields
      { new: true, runValidators: true } // options
    );

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: "mentor not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "mentor updated successfully",
      restaurant,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred in updatementor",
      error: error.message,
    });
  }
};

exports.deleteMentor = async (req, res) => {
  try {
    const userId = req.user.id;

    const mentor = await Mentor.findOneAndDelete({ owner: userId });

    if (!mentor) {
      return res.status(404).json({
        success: false,
        message: " Mentor not found",
      });
    }

    // Downgrade user back to "user"
    await User.findByIdAndUpdate(userId, { accountType: "user" }, { new: true });

    return res.status(200).json({
      success: true,
      message: "mentor deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error occurred in deletementor",
      error: error.message,
    });
  }
};


exports.getMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ mentor: req.user.id });
    if (!mentor) return res.status(404).json({ success: false, message: "No Mentor found" });

    return res.status(200).json({ success: true, mentor });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


exports.getAllMentor = async (req, res) => {
  try {
    const mentor = await Mentor.find();
    return res.status(200).json({ success: true, mentor });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
