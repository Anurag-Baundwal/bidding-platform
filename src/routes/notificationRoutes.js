const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authenticate, getNotifications);
router.put('/:id', authenticate, markAsRead);

module.exports = router;
