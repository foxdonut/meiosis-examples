/*global process*/
var variant = process.env.VARIANT;

module.exports = {
  entry: "./src/index-" + variant + ".js",
  devtool: "source-map",
  output: {
    path: "./build",
    filename: "generated-" + variant + "-app.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
