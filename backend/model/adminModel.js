const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        minlength:[3, 'first name must be at least 3 characters long']},
    email:{
        type:String,
        required:true,
        unique:true,

    },
    
    
    password:{
        type: String,
        required: true,
        
        }
})

adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id },                 // payload
        process.env.JWT_SECRET || "omkurlekar8", // secret
        { expiresIn: "24h" }               // 👈 expires in 24 hours
    );
    return token;
};

adminSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
    
}
adminSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
     
}

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;


