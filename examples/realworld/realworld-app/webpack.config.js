/*global process, __dirname*/
var path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "generated-app.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "realworld-services": path.resolve(__dirname, "../realworld-services-axios/src"),
      "realworld-state": path.resolve(__dirname, "../realworld-state-lodash/src"),
      "realworld-view": path.resolve(__dirname, "../realworld-view-react/src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
