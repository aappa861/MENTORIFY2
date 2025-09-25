const adminModel = require('../model/adminModel');

module.exports.createadmin = async ({
    fullname, email, password
}) => {
    if (!fullname ||  !email || !password) {
        throw new Error('All fields are required');
 }
    const admin = adminModel.create({
        fullname,
        email,
        password
    })
    return admin;
}