const fs = require('fs');
const http = require('http');
const WebSocket = require('ws');

const LOG_FILE = './app.log';

// Ensure log file exists
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, '');
}

// Create HTTP server to serve index.html
const server = http.createServer((req, res) => {
  if (req.url === '/log') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading page");
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

// WebSocket server
const wss = new WebSocket.Server({ server });

// Send last 10 lines when a client connects
wss.on('connection', (ws) => {
  const lines = fs.readFileSync(LOG_FILE, 'utf-8').trim().split('\n');
  const last10 = lines.slice(-10).join('\n');
  ws.send(last10 || "No logs yet...\n");
  ws.send("\n--- Live Updates ---\n");
});

// Track file size so we only send new data
let fileSize = fs.statSync(LOG_FILE).size;

fs.watch(LOG_FILE, (eventType) => {
  if (eventType === 'change') {
    const stats = fs.statSync(LOG_FILE);
    if (stats.size > fileSize) {
      const stream = fs.createReadStream(LOG_FILE, {
        start: fileSize,
        end: stats.size
      });

      let newData = '';
      stream.on('data', chunk => newData += chunk);
      stream.on('end', () => {
        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(newData);
          }
        });
      });

      fileSize = stats.size;
    }
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/log");
});
