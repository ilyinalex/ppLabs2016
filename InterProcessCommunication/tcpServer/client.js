'use strict';

global.api = {};
api.net = require('net');

let socket = new api.net.Socket();
let task;

socket.connect({
  port: 2000,
  host: '127.0.0.1',
}, () => {
  socket.write('Hello from client');
  socket.on('data', (data) => {
    task = JSON.parse(data);
    
    socket.write(JSON.stringify(task.map((item) => item * 2)));
  });
});
