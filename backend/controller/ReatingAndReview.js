const Session = require("../model/session");
const ReatingAndReview = require("../model/Reating");

exports.createReating = async (req, res) => {
    try {
        const userId = req.user?.id;
        const { sessionId, reating, review } = req.body;

        if (!sessionId || !reating || !review) {
            return res.status(400).json({
                success: false,
                message: "Fill all details"
            });
        }

        const alreadyRating = await ReatingAndReview.findOne({ user: userId, session: sessionId });

        if (alreadyRating) {
            return res.status(400).json({
                success: false,
                message: "You already gave a rating for this session"
            });
        }

        const newReview = await ReatingAndReview.create({
            user: userId,
            session: sessionId,
            reating,  // ✅ matches schema
            review
        });

        return res.status(200).json({
            success: true,
            message: "Rating created successfully",
            Review: newReview
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Rating Review controller",
            error: error.message
        });
    }
};

exports.getAllReating=async(req,res)=>{
    try{
        const reating=await ReatingAndReview.find()
        .populate("user","name,email")
        .populate("session","name price")

  return res.status(200).json({
    success:true,
    message:"Found All Reating",
    reating
  })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Get in GetAll Reating",
            error:error.message
        })
    }
}

exports.getReatingById = async (req, res) => {
    try {
        const sessionId = req.params.id;

        if (!sessionId) {
            return res.status(400).json({
                success: false,
                message: "Session not found"
            });
        }

        const reating = await ReatingAndReview.find({ session: sessionId })
            .populate("user", "name email");

        if (!reating || reating.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No ratings found for this session"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Found all ratings",
            reating
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting all ratings",
            error: error.message
        });
    }
};
