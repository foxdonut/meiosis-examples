/*global process, __dirname*/
var variant = process.env.VARIANT;

module.exports = {
  entry: "./src/index-" + variant + ".js",
  output: {
    path: __dirname + "/build",
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
