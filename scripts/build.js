const fs = require('fs');
const path = require('path');
const childProc = require('child_process');
const buildServer = require('./buildServer');
const buildClient = require('./buildClient');

// Change to project root dir
if (!fs.existsSync("client") || !fs.existsSync("server")) {
  process.chdir(path.join(".."));
}

// node build.js <output = build>
var outputDir = "build";

// node build.js <output>
if (process.argv.length > 2) {
  outputDir = process.argv[2];
}

outputDir = path.resolve(outputDir);

if (!fs.existsSync(outputDir)) {
  console.log("creating output directory: " + outputDir);
  fs.mkdirSync(outputDir);
}

buildClient(path.resolve(path.join(".", "client")), outputDir);
buildServer(path.resolve(path.join(".", "server")), outputDir);