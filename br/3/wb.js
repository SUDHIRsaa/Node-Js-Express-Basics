const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 3000;
const logFile = path.join(__dirname, "app.log");

// Ensure log file exists
if (!fs.existsSync(logFile)) {
  fs.writeFileSync(logFile, "");
}

let recentLogs = [];

// Serve static client
app.use(express.static(path.join(__dirname, "public")));

// WebSocket connection
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send initial logs
  ws.send(JSON.stringify({ type: "log_batch", logs: recentLogs }));

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Watch file for changes
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

      // Send to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "log_batch", logs: recentLogs }));
        }
      });
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
