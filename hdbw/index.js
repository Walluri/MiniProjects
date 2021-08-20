const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

app.listen(5000);

app.get("/script.js", async function (req, res) {
  console.log(`Requested for script received at : ${new Date()}`);
  await wait(6000);
  res.sendFile(path.resolve(__dirname, "script.js"));
});

app.get("/style.css", async function (req, res) {
  console.log(`Requested for style received at : ${new Date()}`);
  await wait(3000);
  res.contentType("text/css").sendFile(path.resolve(__dirname, "style.css"));
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const wait = (timeOut) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, timeOut);
  });
};

module.exports = app;
