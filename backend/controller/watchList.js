const mongoose = require("mongoose")
const Watchlist = require("../model/watchlist")
const Session = require("../model/session")

exports.getWatchlist = async (req, res) => {
    try {
        const userId=req.user.id
        const watchlist = await Watchlist.findOne({ user: userId })
            .populate("items.session");

        if (!watchlist) {
            return res.status(200).json({
                success: true,
                items: [],
                message: "watchlist not found"
            });
        }
        return res.status(200).json({
            success: true,
            watchlist
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error get in getWatchlist",
            error: error.message
        })
    }
}

exports.addSession = async (req, res) => {
    try {
        const userId = req.user.id
        const { sessionId } = req.body

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "UserId not Get"
            })
        }
        let watchlist = await Watchlist.findOne({ user: userId });

        if (!watchlist) {
            watchlist = await Watchlist.create({
                user: userId,
                items: [{ session: sessionId }]
            });
        } else {
            watchlist.items.push({ session: sessionId });
            await watchlist.save();
        }

        watchlist = await watchlist.populate("items.session");



        return res.status(200).json({
            success: true,
            message: 'session Addad in Watchlist',
            watchlist
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error get in addWatchlist",
            error: error.message
        })
    }
}

exports.removeFromWatchlist = async (req, res) => {
    try {
        const userId = req.user.id
        const { sessionId } = req.body

        if (!sessionId) {
            return res.status(400).json({
                success: false,
                message: "Session not found"
            })
        }
        const watchlist = await Watchlist.findOne({ user: userId })
        if (!watchlist) {
            return res.status(400).json({ success: false, message: "Watchlist not found " })
        }
        watchlist.items = watchlist.items.filter(item => item.session.toString() !== sessionId);
        await watchlist.save();

        return res.status(200).json({
            success: true, message: "Session removed"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error get in Session Removed",
            error: error.message

        })
    }
}