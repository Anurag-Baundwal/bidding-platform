const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();
require('./config/database');

const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const bidRoutes = require('./routes/bidRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/notifications', notificationRoutes);

app.use(errorHandler);

module.exports = app;
