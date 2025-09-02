const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;



app.get("/open", (req, res) => {
  const appName = req.query.app;
  const url = req.query.url || "https://www.google.com";

  if (appName === "chrome") {
    exec(`start chrome --new-window "${url}"`);
    res.send(`Opened Chrome with ${url}`);
  } else if (appName === "firefox") {
    exec(`start firefox -new-window "${url}"`);
    res.send(`Opened Firefox with ${url}`);
  } else {
    res.status(400).send("Invalid app. Use ?app=chrome or ?app=firefox");
  }
});


app.get("/close", (req, res) => {
  const appName = req.query.app;

  if (appName === "chrome") {
    exec("taskkill /IM chrome.exe /F");
    res.send("Closed Chrome");
  } else if (appName === "firefox") {
    exec("taskkill /IM firefox.exe /F");
    res.send("Closed Firefox");
  } else {
    res.status(400).send("Invalid app. Use ?app=chrome or ?app=firefox");
  }
});


app.listen(PORT, () => {
  console.log(`Browser service running at http://localhost:${PORT}`);
});
