const router =require("express").Router()

const{auth,IsMentor}=require("../middleware/auth")
const{createSession,getAllSession,getSession}=require("../controller/Session")
const {createReating,getAllReating,getReatingById}=require("../controller/ReatingAndReview")
const{getWatchlist,addSession,removeFromWatchlist}=require("../controller/watchList")
const{bookSession,getBookSession,getAllBooking}=require("../controller/sessionBook")

//Session Routes
router.post("/createSession",auth,IsMentor,createSession)
router.get("/getAllSession",getAllSession);
router.get("/getSession/:id",getSession)

//watchlist Routes
router.post("/addToWatchlist",auth,addSession)
router.get("/getWatchlist",auth,getWatchlist)
router.delete("/removeFromWatchlist",auth,removeFromWatchlist)

//Booking Session
router.post("/bookSession",auth,bookSession)
router.get("/getbookSession",auth,getBookSession)
router.get("/getAllBookSession",auth,getAllBooking)//=>later add admin in theis routes


//Reatin Routes
router.post("/reating",auth,createReating)
router.get("/getAllReating",getAllReating)
router.get("/getReatingById/:id",getReatingById)

module.exports=router