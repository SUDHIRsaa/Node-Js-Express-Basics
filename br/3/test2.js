const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "app.log");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = 0;

setInterval(() => {
  const logEntry = `Log entry: ${days[i]}\n`;
  fs.appendFileSync(logFile, logEntry);

  i = (i + 1) % days.length; // loop back after Sunday
}, 1000);

console.log("✅ Log generator started. Writing days to", logFile);
