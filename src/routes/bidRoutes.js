const express = require('express');
const { placeBid, getBidsForItem } = require('../controllers/bidController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticate, placeBid);
router.get('/:itemId', getBidsForItem);

module.exports = router;
