"use strict";

const socketIoLogger = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const server = socketIoLogger.connect(API_URL);

server.on('save-log', payload => {
  console.log('logger file-save message:', payload);
});

server.on('error-log', payload => {
  console.log('logger file-error message:', payload);
});