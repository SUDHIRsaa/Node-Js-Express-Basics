const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve the public folder
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  socket.on("chat:join", (name) => {
    socket.data.name = (name || "").trim() || "Anonymous";
    socket.emit("system", `You joined as ${socket.data.name}`);
    socket.broadcast.emit("system", `${socket.data.name} joined the chat`);
  });

  socket.on("chat:message", (text) => {
    const payload = {
      id: socket.id,
      name: socket.data.name || "Anonymous",
      text: String(text || "").slice(0, 1000),
      time: Date.now(),
    };
    io.emit("chat:message", payload);
  });

  socket.on("disconnect", () => {
    if (socket.data.name) {
      io.emit("system", `${socket.data.name} left the chat`);
    }
    console.log("user disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Chat server running → http://localhost:${PORT}`)
);
