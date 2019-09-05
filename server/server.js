"use strict";
let PORT = 3000;
const socketIoServer = require('socket.io')(PORT);

socketIoServer.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('file-save', (payload) => {
    console.log(`${payload} saved by server`);
    socket.broadcast.emit('save-log', payload);
  });

  socket.on('file-error', (payload) => {
    console.log(`${payload} had an error`);
    socket.broadcast.emit('error-log', payload);
  });

});

console.log(`Server is up on port ${PORT}`);

