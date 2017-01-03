/*global process*/
var variant = process.env.VARIANT;

module.exports = {
  entry: "./" + variant + "/index.js" + (variant === "react" ? "x" : ""),
  devtool: "source-map",
  output: {
    path: "./" + variant + "/",
    filename: "generated-app.js"
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
