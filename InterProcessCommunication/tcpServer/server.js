'use strict';

global.api = {};
api.net = require('net');

let task =[1, 2, 3, 4];

let server = api.net.createServer((socket) => {
  socket.write(JSON.stringify(task));
  console.log('Connected: ' + socket.localAddress);
  socket.on('data', (data) => {
    console.log('Data received (by server): ' + data);
  });
});

server.listen(2000);
