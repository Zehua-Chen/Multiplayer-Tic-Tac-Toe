const child = require('child_process');
const process = require('process');
const path = require('path');

const clientPath = path.resolve(__dirname, path.join("..", "client"));
process.chdir(clientPath);

child.spawn("npm", ["run", "build"]);