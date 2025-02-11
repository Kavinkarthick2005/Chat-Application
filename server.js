const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("message", (msg) => {
        io.emit("message", msg);
    });
});

server.listen(3000, () => {
    console.log("Chat server running on port 3000");
});
