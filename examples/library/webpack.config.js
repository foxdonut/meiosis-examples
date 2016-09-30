/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./index.ts",
  devtool: "source-map",
  output: {
    path: ".",
    filename: "generated-app" + (isProduction ? ".min" : "") + ".js"
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  ts: {
    compilerOptions: {
      declaration: false
    }
  },
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    loaders: [
      {
        loader: "ts",
        test: /\.ts$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
