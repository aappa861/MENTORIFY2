const mongoose = require("mongoose");

const reatingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true },
    reating: { type: Number, required: true },
    review: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Reating", reatingSchema);
