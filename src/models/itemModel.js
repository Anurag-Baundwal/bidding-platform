const pool = require('../config/database');

const createItem = async (name, description, startingPrice, imageUrl, endTime) => {
    const query = 'INSERT INTO items (name, description, starting_price, current_price, image_url, end_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [name, description, startingPrice, startingPrice, imageUrl, endTime];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getAllItems = async () => {
    const query = 'SELECT * FROM items';
    const res = await pool.query(query);
    return res.rows;
};

const getItemById = async (id) => {
    const query = 'SELECT * FROM items WHERE id = $1';
    const res = await pool.query(query, [id]);
    return res.rows[0];
};

const updateItem = async (id, name, description, startingPrice, imageUrl, endTime) => {
    const query = 'UPDATE items SET name = $1, description = $2, starting_price = $3, image_url = $4, end_time = $5 WHERE id = $6 RETURNING *';
    const values = [name, description, startingPrice, imageUrl, endTime, id];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const deleteItem = async (id) => {
    const query = 'DELETE FROM items WHERE id = $1 RETURNING *';
    const res = await pool.query(query, [id]);
    return res.rows[0];
};

module.exports = { createItem, getAllItems, getItemById, updateItem, deleteItem };
