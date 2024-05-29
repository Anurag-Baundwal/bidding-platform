const app = require('./app');
const { Server } = require('socket.io');
const http = require('http');
require('dotenv').config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
