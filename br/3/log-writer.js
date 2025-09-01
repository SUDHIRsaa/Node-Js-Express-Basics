// logGenerator.js
const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "app.log"); // same log file your server watches

// Function to append a new log line every second
// fake log generator (writes once every 2 seconds)
setInterval(() => {
  fs.appendFileSync(logFile, `Log entry at ${new Date().toISOString()}\n`);
  fs.appendFileSync(logFile, `Log entry at ${new Date().toISOString()}\n`); // <-- duplicate
}, 2000);



console.log("✅ Log generator started. Writing logs to", logFile);
