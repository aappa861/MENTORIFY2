const adminModel = require('../model/adminModel');
const adminService = require('../services/adminService');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../model/blacklistModel');

module.exports.registeradmin = async (req, res, next) => {
    console.log("body:",req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password} = req.body;
    const isUserAlready = await adminModel.findOne({email});
    if (isUserAlready) {
        return res.status(400).json({message:'User already exists with this email'});
    }

    const hashPassword = await adminModel.hashPassword(password);

    const admin = await adminService.createadmin({
        fullname,
        email,
        password:hashPassword
    });

    const token = admin.generateAuthToken();
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Strict', // Adjust as needed
    });

    res.status(201).json({ token,admin});

} 

module.exports.loginadmin = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;

    const admin = await adminModel.findOne({email}).select('+password');
    if (!admin) {
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token = admin.generateAuthToken();

    res.status(200).json({ token,admin });
}

module.exports.getadminProfile = async (req,res,next) => {
    res.status(200).json({
        admin: req.admin
    });
}
module.exports.logoutadmin = async (req, res, next) => {
    try {
        // Get token from cookie or Authorization header
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }


        // Clear cookie if it exists
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
        });

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error during logout',error:error.message });
    }
};

