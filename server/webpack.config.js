const path = require("path");

// Used to ignore all modules in ./node_modules
const nodeExternals = require("webpack-node-externals");

var outDir = path.join(".");
var mainDir = path.join(".", "src", "index.ts");

module.exports = {
  // Build for production.
  mode: "production",

  // Make the output run on node.
  target: "node",

  // Specify entry file.
  entry: path.resolve(__dirname, mainDir),

  // Specify output file.
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, outDir)
  },

  // Add files that are included.
  resolve: {
    extensions: [".ts", ".js"]
  },

  // Add ts-loader to be able to compile Typescript files.
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },

  // Ignore all modules in ./node_modules/
  externals: [nodeExternals()]
};
