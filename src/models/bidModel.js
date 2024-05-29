const pool = require('../config/database');

const createBid = async (itemId, userId, bidAmount) => {
    const query = 'INSERT INTO bids (item_id, user_id, bid_amount) VALUES ($1, $2, $3) RETURNING *';
    const values = [itemId, userId, bidAmount];
    const res = await pool.query(query, values);

    const updateItemQuery = 'UPDATE items SET current_price = $1 WHERE id = $2';
    await pool.query(updateItemQuery, [bidAmount, itemId]);

    return res.rows[0];
};

const getBidsByItemId = async (itemId) => {
    const query = 'SELECT * FROM bids WHERE item_id = $1';
    const res = await pool.query(query, [itemId]);
    return res.rows;
};

module.exports = { createBid, getBidsByItemId };
