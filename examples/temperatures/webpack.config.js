/*global process*/
var variant = process.env.VARIANT;

module.exports = {
  entry: "./index-" + variant + ".js",
  output: {
    path: ".",
    filename: "generated-" + variant + "-app.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
