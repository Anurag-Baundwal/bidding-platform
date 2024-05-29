const { createNotification, getNotificationsByUserId, markNotificationAsRead } = require('../models/notificationModel');

const sendNotification = async (userId, message) => {
    await createNotification(userId, message);
};

const getNotifications = async (req, res) => {
    const notifications = await getNotificationsByUserId(req.user.userId);
    res.status(200).json(notifications);
};

const markAsRead = async (req, res) => {
    const notification = await markNotificationAsRead(req.params.id);
    if (!notification) return res.status(404).json({ message: 'Notification not found.' });
    res.status(200).json(notification);
};

module.exports = { sendNotification, getNotifications, markAsRead };
