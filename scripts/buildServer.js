// const child = require('child_process');
// const process = require('process');
// const path = require('path');
// const fs = require('fs');

// const serverDir = path.resolve(__dirname, path.join("..", "server"));
// const configPath = path.join(serverDir, "package.json");

// // COnfigure configuration file

// const dependencies = require(configPath).dependencies;

// var serverConfig = {
//     name: "server",
//     version: "1.0.0",
//     scripts: {
//         start: "node server.js"
//     },
//     dependencies: dependencies
// };

// const outConfigDir = path.resolve(path.join("..", "build", "package.json"));
// fs.writeFileSync(outConfigDir, JSON.stringify(serverConfig));


// // Build server
// process.chdir(serverDir);

// if (!fs.existsSync(path.join("..", "build"))) {
//     fs.mkdirSync(path.join("..", "build"));
// }

// child.spawnSync("npm", ["run", "build"]);
module.exports = function(serverPath, outputDir) {
  console.log("building server");
}