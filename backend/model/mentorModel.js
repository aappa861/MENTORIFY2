const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    expertise: {
        type: String,
        required: true},
    bio:{type:String,required:true},
    phone:{type:Number,required:true},
    mentor:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', },
    createdAt: {
        type: Date,
        default: Date.now
    }

    
})

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;