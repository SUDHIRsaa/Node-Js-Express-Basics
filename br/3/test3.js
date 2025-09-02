const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "app.log");

async function fetchAndLog() {
  try {
    // Fetch data from API
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    // Open writable stream in append mode
    const stream = fs.createWriteStream(logFile, { flags: "a" });

    const multiplier = 100000; // Number of batches
    let totalRecords = 0;

    for (let batch = 0; batch < multiplier; batch++) {
      for (const record of data) {
        // Only log a unique ID per record per batch
        const uniqueId = `${record.id}-${batch}`;
        totalRecords++;

        if (!stream.write(uniqueId + "\n")) {
          // Wait for drain if buffer is full
          await new Promise(resolve => stream.once("drain", resolve));
        }
      }
    }

    stream.end(() => {
      console.log(`✅ Wrote ${totalRecords} unique IDs to log file`);
      // Schedule next run
      setTimeout(fetchAndLog, 30000);
    });

  } catch (err) {
    console.error("❌ Error fetching API:", err);
    // Retry after 30 seconds
    setTimeout(fetchAndLog, 1000);
  }
}

// Start the process
fetchAndLog();
console.log("🚀 Unique ID logger started.");
