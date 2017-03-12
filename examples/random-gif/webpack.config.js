/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    filename: "generated-app.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
