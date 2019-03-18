const childProc = require(`child_process`);
const path = require(`path`);
const fs = require(`fs`);

/**
 * Build the client using the path to the client and output the artifact
 * to the a path
 * @param {string} clientPath absolute path to the client folder
 * @param {string} outputDir absolute path to the output folder
 */
function buildClient(clientPath, outputDir) {
  var parentDir = process.cwd();
  // Change into client directory
  process.chdir(clientPath);
  
  var clientOutputDir = path.join(outputDir, "public")
  
  if (fs.existsSync(clientOutputDir)) {
    process.chdir(parentDir);
    return;
  }
  
  console.log("building client " + clientOutputDir);
  // run build script
  childProc.spawnSync("npm", ["run", "build"]);
  // move build artifact to public folder in build dir
  fs.renameSync(path.join(".", "build"), clientOutputDir);
  
  // Change to root project directory
  process.chdir(parentDir);
}

module.exports = buildClient;