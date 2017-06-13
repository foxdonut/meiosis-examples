/*global process, __dirname*/
var webpack = require("webpack");
var isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.js",
  devtool: isProduction ? "source-map" : "eval",
  output: {
    path: __dirname + "/build",
    filename: "generated-app" + (isProduction ? ".min" : "") + ".js"
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
