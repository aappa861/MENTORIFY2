const router = require("express").Router();
const { mentorRegister,updateMentor,deleteMentor,getAllMentor,getMentor } = require("../controller/MentorController");
const {auth}=require("../middleware/auth");


router.post("/register",auth, mentorRegister);
router.post("/updateMentor",auth, updateMentor);//mentor auth have to be add leter ishant
router.delete("/deleteMentor",auth, deleteMentor);

router.get("/getallMentor", getAllMentor);
router.get("/getMentor",auth, getMentor);


module.exports = router;