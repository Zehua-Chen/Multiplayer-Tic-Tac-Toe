const childProc = require('child_process');
const process = require('process');
const path = require('path');
const fs = require('fs');

/**
 * Make a configuration file from package.json stored in a folder at a
 * a specified path
 * @param {string} serverPath the folder that contains package.json
 * @returns {string} a string version of the project file
 */
function makeConfigFile(serverPath) {
  var serverConfig = require(path.join(serverPath, "package.json"));
  var config = {
    name: "server",
    version: "1.0.0",
    scripts: {
        start: "node server.js"
    },
    dependencies: serverConfig.dependencies
  };
  
  return JSON.stringify(config);
}

function compileServerExecutable(outputFile) {
  // Build server index.ts
  childProc.spawnSync("npm", ["run", "build"]);
  // Move server.js to output dir
  fs.renameSync(path.join(".", "server.js"), outputFile);
}

/**
 * Build server stored a specified path and move the artifacts into an output 
 * directory
 * @param {string} serverPath 
 * @param {string} outputDir 
 */
function buildServer(serverPath, outputDir) {
  var parentDir = process.cwd();
  // Move to the right working directory
  process.chdir(serverPath);
  
  var serverExecutable = path.join(outputDir, "server.js");
  var serverConfig = path.join(outputDir, "package.json");
  
  // if server executable is not there
  if (!fs.existsSync(serverExecutable)) {
    // Build the server
    console.log("building server executable: " + serverExecutable);
    compileServerExecutable(serverExecutable);
  }
  
  // if server config file is not there
  if (!fs.existsSync(serverConfig)) {
    // Generate project config file
    console.log("making server configuration file: " + serverConfig)
    var configFile = makeConfigFile(serverPath);
    fs.writeFileSync(path.join(outputDir, "package.json"), configFile);
  }
  
  process.chdir(parentDir);
}

module.exports = buildServer;