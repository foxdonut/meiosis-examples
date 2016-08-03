/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var variant = process.env.VARIANT;
var webpack = require("webpack");

module.exports = {
  entry: "./app-" + variant + ".js",
  devtool: "source-map",
  output: {
    path: ".",
    filename: "generated-" + variant + "-app" + (isProduction ? ".min" : "") + ".js"
  },
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    loaders: [
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
