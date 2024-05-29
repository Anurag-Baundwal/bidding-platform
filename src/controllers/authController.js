const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');
require('dotenv').config();

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = await createUser(username, email, password);
  res.status(201).json(user);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
};

module.exports = { register, login };
