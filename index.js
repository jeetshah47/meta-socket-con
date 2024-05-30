const http = require("http");
const { Server } = require('socket.io');

const server = http.createServer((req, res) => {
})

const io = new Server(server, {
  cors: '*'
});


io.on('connection', (socket) => {
    
    console.log("COnneted");
    socket.emit('connecetd', "HI From Server")
    socket.on('mouse-event', (message) => {
      console.log(message);
      io.emit("mouse-receive", {coor: message, id: socket.id})
        // io.emit('chat message', message); // Broadcast the message to all connected clients
      });
})

server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001');
});