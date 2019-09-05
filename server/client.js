'use strict';

const socketIoClient = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const server = socketIoClient.connect(API_URL);

server.emit('file-save', 'test file-save message from client');
server.emit('file-error', 'test file-error message from client');

server.on('log', payload => {
  console.log(payload);
});