/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./index.ts",
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "library-persistence" + (isProduction ? ".min" : "") + ".js",
    library: "libraryPersistence",
    libraryTarget: "umd"
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
    loaders: [
      {
        loader: "ts",
        test: /\.tsx?$/,
        exclude: /node_modules/
      }
    ],
    preloaders: [
      {
        loader: "source-map",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
