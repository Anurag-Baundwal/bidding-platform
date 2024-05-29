const { createItem, getAllItems, getItemById, updateItem, deleteItem } = require('../models/itemModel');

const createNewItem = async (req, res) => {
    const { name, description, startingPrice, imageUrl, endTime } = req.body;
    const item = await createItem(name, description, startingPrice, imageUrl, endTime);
    res.status(201).json(item);
};

const getItems = async (req, res) => {
    const items = await getAllItems();
    res.status(200).json(items);
};

const getItem = async (req, res) => {
    const item = await getItemById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    res.status(200).json(item);
};

const updateItemById = async (req, res) => {
    const { name, description, startingPrice, imageUrl, endTime } = req.body;
    const item = await updateItem(req.params.id, name, description, startingPrice, imageUrl, endTime);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    res.status(200).json(item);
};

const deleteItemById = async (req, res) => {
    const item = await deleteItem(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    res.status(200).json({ message: 'Item deleted successfully.' });
};

module.exports = { createNewItem, getItems, getItem, updateItemById, deleteItemById };
