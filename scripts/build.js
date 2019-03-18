const child = require('child_process');

console.log("build client");
child.spawnSync("node", ["build-client.js"]);

console.log("build server");
child.spawnSync("node", ["build-server.js"]);