/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var variant = process.env.VARIANT;
var webpack = require("webpack");

module.exports = {
  entry: "./src/index-" + variant + ".js",
  output: {
    path: ".",
    filename: "generated-" + variant + "-app.js"
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
