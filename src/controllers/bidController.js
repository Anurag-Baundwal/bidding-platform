const { createBid, getBidsByItemId } = require('../models/bidModel');

const placeBid = async (req, res) => {
    const { itemId, bidAmount } = req.body;
    const userId = req.user.userId; // Assuming userId is stored in the token
    const bid = await createBid(itemId, userId, bidAmount);
    res.status(201).json(bid);
};

const getBidsForItem = async (req, res) => {
    const bids = await getBidsByItemId(req.params.itemId);
    res.status(200).json(bids);
};

module.exports = { placeBid, getBidsForItem };
