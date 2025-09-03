const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;
const logFile = path.join(__dirname, "app.log");

if (!fs.existsSync(logFile)) {
  fs.writeFileSync(logFile, "");
}




let recentLogs = [];

app.use(express.static(path.join(__dirname, "public")));
app.get("/log", (req, res) => {
  
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  console.log("Client connected");
  console.log("socket.id:", socket.id);
  socket.emit("log_batch", recentLogs);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});




fs.watchFile(logFile, { interval: 500 }, (curr, prev) => {
  
  if (curr.size > prev.size) {
    const stream = fs.createReadStream(logFile, {
      start: prev.size,
      end: curr.size,
      encoding: "utf8",
    });
    

    stream.on("data", (chunk) => {
      chunk.split("\n").forEach((line) => {
        if (line.trim().length > 0) {
     
          recentLogs.unshift(line);

          
          if (recentLogs.length > 10) {
            recentLogs = recentLogs.slice(0, 10);
          }
        }
      });

      
      io.emit("log_batch", recentLogs);
    });
  

    stream.on("error", (err) => {
      console.error("Stream error:", err);
    });

    lastSize = curr.size;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/log`);
});
