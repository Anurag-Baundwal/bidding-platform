const express = require('express');
const { createNewItem, getItems, getItem, updateItemById, deleteItemById } = require('../controllers/itemController');
const authenticate = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', authenticate, createNewItem);
router.put('/:id', authenticate, updateItemById);
router.delete('/:id', authenticate, deleteItemById);

module.exports = router;
