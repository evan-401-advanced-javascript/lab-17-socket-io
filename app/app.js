'use strict';

const socketIoApp = require('socket.io-client');
const API_URL = 'http://localhost:3000';
const server = socketIoApp.connect(API_URL);

const fs = require('fs');

/**
 * Function uses fs to read file and then calls change case
 * @param file
 */
const readFile = (file) => {
  let text = {};
  fs.readFile( file, (err, data) => {
    if(err) {server.emit('file-error')}
    text.data = data.toString();
    text.file = file;
    console.log('file read');
    changeCase(text)
  });
};

/**
 * Function uses toUppercase to change file to uppercase and then calls updatingFile
 * @param text
 */
const changeCase = (text) => {
  text.data.toUpperCase();
  console.log('file changed to upper case');
  updatingFile(text);
};

/**
 * function uses fs to write the changes to the file and then uses socket to call server.js
 * @param text
 */
const updatingFile = (text) => {
  fs.writeFile( text.file, Buffer.from(text.data), (err, data) => {
    if(err) {server.emit('file-error')}
    console.log('file updated');
    server.emit('file-save', `${file} saved`);
  });
};

let file = process.argv.slice(2).shift();
readFile(file);
