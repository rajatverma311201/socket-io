const express = require("express");

const socketio = require("socket.io");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

const server = app.listen(8000, () =>
    console.log("Server is running on port 8000")
);

const io = socketio(server);

io.on("connection", (socket) => {
    console.log("New SOCKET Connection", socket.id);

    socket.emit("messageFromServer", "Welcome to the socket server");

    socket.on("messageFromClient", (data) => {
        console.log(data);
    });
});
