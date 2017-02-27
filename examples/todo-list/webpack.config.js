/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var variant = process.env.VARIANT;
var webpack = require("webpack");

module.exports = {
  entry: "./src/index-" + variant + ".js",
  devtool: isProduction ? "source-map" : "eval",
  output: {
    path: "./build",
    filename: "generated-" + variant + "-app" + (isProduction ? ".min" : "") + ".js"
  },
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
