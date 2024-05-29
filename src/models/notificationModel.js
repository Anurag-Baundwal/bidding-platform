const pool = require('../config/database');

const createNotification = async (userId, message) => {
    const query = 'INSERT INTO notifications (user_id, message) VALUES ($1, $2) RETURNING *';
    const values = [userId, message];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getNotificationsByUserId = async (userId) => {
    const query = 'SELECT * FROM notifications WHERE user_id = $1';
    const res = await pool.query(query, [userId]);
    return res.rows;
};

const markNotificationAsRead = async (notificationId) => {
    const query = 'UPDATE notifications SET is_read = true WHERE id = $1 RETURNING *';
    const res = await pool.query(query, [notificationId]);
    return res.rows[0];
};

module.exports = { createNotification, getNotificationsByUserId, markNotificationAsRead };
