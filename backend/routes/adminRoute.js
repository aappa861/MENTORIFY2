const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const adminController = require('../controller/adminController');
const authMiddleware = require('../middleware/auth');
//const AuthMiddleware = require('../middlewares/auth.middleware');
const {authUser,authAdmin}=require("../middleware/auth")


router.post('/register',[body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')],adminController.registeradmin);

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min:6}).withMessage('check valid required')
], adminController.loginadmin);

router.get('/profile',authAdmin,adminController.getadminProfile);
router.get('/logout',authAdmin,adminController.logoutadmin);





module.exports = router;