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

// Ensure log file exists
if (!fs.existsSync(logFile)) {
  fs.writeFileSync(logFile, "");
}

// --- Temporary log generator for testing ---
setInterval(() => {
  const logEntry = `Log entry at ${new Date().toISOString()}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error("Error writing log:", err);
  });
}, 2000);

// Rolling buffer (max 10 logs)
let recentLogs = [];

// --- Serve static client ---
app.use(express.static(path.join(__dirname, "public")));

// --- WebSocket connections ---
io.on("connection", (socket) => {
  console.log("Client connected");

  // Send current buffer immediately
  socket.emit("log_batch", recentLogs);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// --- Watch file for new data ---
let lastSize = fs.statSync(logFile).size;

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
          // Insert new line at the start (descending order)
          recentLogs.unshift(line);

          // Keep only 10 latest logs
          if (recentLogs.length > 10) {
            recentLogs = recentLogs.slice(0, 10);
          }
        }
      });

      // Send logs to client
      io.emit("log_batch", recentLogs);
    });
  

    stream.on("error", (err) => {
      console.error("Stream error:", err);
    });

    lastSize = curr.size;
  }
});

// --- Start server ---
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
