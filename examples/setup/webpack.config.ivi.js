/*global __dirname*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "ivi": "./ivi/index.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              ["ivi-jsx"]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "__IVI_DEV__": true,
      "__IVI_BROWSER__": true
    })
  ]
};
