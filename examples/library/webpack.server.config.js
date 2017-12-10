/*global __dirname*/
var Path = require("path");

module.exports = {
  entry: {
    "main": "./src/client/main/index.js"
  },
  output: {
    path: Path.join(__dirname, "build"),
    filename: "generated-[name].js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
