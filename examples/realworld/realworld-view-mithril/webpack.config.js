/*global process, __dirname*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "generated-app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
