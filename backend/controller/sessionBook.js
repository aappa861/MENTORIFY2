const Session =require("../model/session")
const Booking =require("../model/booking")



exports.bookSession = async (req, res) => {
    try {
        const userId = req.user.id;
        const { sessionId } = req.body;

        if (!sessionId) {
            return res.status(400).json({
                success: false,
                message: "SessionId is required"
            });
        }

        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({
                success: false,
                message: "Session not found"
            });
        }

        // Prevent duplicate booking
        const existingBooking = await Booking.findOne({ user: userId, session: sessionId });
        if (existingBooking) {
            return res.status(400).json({
                success: false,
                message: "Session already booked"
            });
        }

        // ✅ Create booking with session price
        const booking = await Booking.create({
            user: userId,
            session: sessionId,
            price: session.price   // take price from session
        });

        return res.status(200).json({
            success: true,
            message: "Session booked successfully",
            booking
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in booking session",
            error: error.message
        });
    }
};


exports.getBookSession = async (req, res) => {
    try {
        const userId = req.user.id

        const booking = await Booking.findOne({ user: userId })
            .populate("mentor", "name,email")
            .sort({ date: -1 });

        return res.status(200).json({
            success: true,
            booking,
            message: "session get succesfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in get booking session",
            error: error.message
        });
    }
}

exports.getAllBooking=async(req,res)=>{
    try{
        const allSession=await Booking.find()
          .populate("user", "name email")
          .populate("items.session", "name price")


        return res.status(200).json({
            success:false,
            message:"finding all session",
            allSession
        })
    }
    catch(error){
            return res.status(500).json({
            success: false,
            message: "Error geting allbooking session",
            error: error.message
        });
    }
}