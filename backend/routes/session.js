const router = require("express").Router();
const { addsession, getsession ,getallsession} = require("../controller/Session");
const {auth}=require("../middleware/auth");


router.post("/addsession",auth, addsession);


router.get("/getallsession", getsession);
router.get("/getsession",auth, getallsession);


module.exports = router;