/*global __dirname*/
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "part-04-ex-04": "./part-04/04/index.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
