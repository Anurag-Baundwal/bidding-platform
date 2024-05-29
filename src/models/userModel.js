const pool = require('../config/database');
const bcrypt = require('bcryptjs');

const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [username, email, hashedPassword];
  const res = await pool.query(query, values);
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const res = await pool.query(query, [email]);
  return res.rows[0];
};

const findUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const res = await pool.query(query, [id]);
  return res.rows[0];
};

module.exports = { createUser, findUserByEmail, findUserById };
