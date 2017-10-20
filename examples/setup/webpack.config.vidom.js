/*global __dirname*/
var path = require("path");

module.exports = {
  entry: {
    "vidom": "./vidom/index.js"
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
              ["vidom-jsx"]
            ]
          }
        }
      }
    ]
  }
};
