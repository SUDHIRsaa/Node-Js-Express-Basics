const fs = require('fs');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const LOG_FILE = './app.log';

if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, '');
}

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve frontend
app.get('/log', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Efficient last 10 lines reader
function readLastNLines(path, n, callback) {
  const stream = fs.createReadStream(path, { encoding: 'utf8' });
  let leftover = '';
  let lines = [];

  stream.on('data', (chunk) => {
    leftover += chunk;
    const parts = leftover.split('\n');
    leftover = parts.pop();
    lines = lines.concat(parts);
  });

  stream.on('end', () => {
    if (leftover) lines.push(leftover);
    callback(lines.slice(-n));
  });
}

let fileSize = fs.statSync(LOG_FILE).size;

// Handle client connections
io.on('connection', (socket) => {
  console.log("Client connected");

  // Send last 10 lines
  readLastNLines(LOG_FILE, 10, (lines) => {
    socket.emit("log", lines.join('\n') + '\n--- Live Updates ---\n');
  });
});

// Watch file for changes
fs.watch(LOG_FILE, (eventType) => {
  if (eventType === 'change') {
    const stats = fs.statSync(LOG_FILE);

    // Handle file truncate/rotation
    if (stats.size < fileSize) {
      console.log("File truncated/rotated, resetting...");
      fileSize = 0;
    }

    if (stats.size > fileSize) {
      const stream = fs.createReadStream(LOG_FILE, {
        start: fileSize,
        end: stats.size
      });

      let newData = '';
      stream.on('data', chunk => newData += chunk);
      stream.on('end', () => {
        io.emit("log", newData); // broadcast to all clients
      });

      fileSize = stats.size;
    }
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/log");
});
