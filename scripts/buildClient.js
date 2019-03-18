const childProc = require(`child_process`);
const path = require(`path`);
const fs = require(`fs`);

module.exports = function(clientPath, outputDir) {
  // Change into client directory
  process.chdir(clientPath);
  
  var clientOutputDir = path.join(outputDir, "public")
  
  if (fs.existsSync(clientOutputDir)) {
    return;
  }
  
  console.log("building client " + clientOutputDir);
  // run build script
  childProc.spawnSync("npm", ["run", "build"]);
  // move build artifact to public folder in build dir
  fs.renameSync(path.join(".", "build"), clientOutputDir);
  
  // Change to root project directory
  process.chdir(path.join(".."));
}