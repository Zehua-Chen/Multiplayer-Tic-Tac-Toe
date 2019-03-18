const child = require('child_process');
const process = require('process');
const path = require('path');
const fs = require('fs');

const clientPath = path.resolve(__dirname, path.join("..", "client"));
process.chdir(clientPath);

child.spawnSync("npm", ["run", "build"]);
fs.renameSync(path.join(".", "build"), path.join("..", "build", "public"))