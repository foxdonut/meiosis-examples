/*global __dirname*/
var webpack = require("webpack");
var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    "domvm": "./src/client/domvm/index.js"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
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
  },
  plugins: [
    new webpack.DefinePlugin({
      "SERVICE_URL": JSON.stringify("")
    }),
    new UglifyJsPlugin()
  ]
};
