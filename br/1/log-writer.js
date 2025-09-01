const fs = require('fs');
const LOG_FILE = './app.log';

// Append a new line every 2 seconds
setInterval(() => {
  const logLine = `Log entry at ${new Date().toISOString()}\n`;
  fs.appendFileSync(LOG_FILE, logLine);
  console.log("Wrote:", logLine.trim());
}, 2000);
