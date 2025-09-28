const router =require("express").Router()

const{auth}=require("../middleware/auth")
const {createReating,getAllReating,getReatingById}=require("../controller/ReatingAndReview")

router.post("/reating",auth,createReating)
router.get("/getAllReating",getAllReating)
router.get("/getReatingById",getReatingById)

module.exports=router