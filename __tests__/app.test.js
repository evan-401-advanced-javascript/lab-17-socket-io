'use strict';

const fs = require('fs');
const events = require('../modular-events/events');
const processFile = require('../modular-events/read-file.js');

describe('validator module performs basic validation of', () => {


  it('validates if values can be added normally', () => {
    let tempData;
    let file = '../test.txt';
    fs.readFile(file)
       .then(data => {
         tempData = data;
         console.log(data);
       })
      .catch(error => console.error(error));

    // expect(alterFile(file)).toEqual();
  });
});