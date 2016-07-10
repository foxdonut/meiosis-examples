/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./app-vue.js",
  output: {
    path: ".",
    filename: isProduction ? "generated-vue-app.min.js" : "generated-vue-app.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
