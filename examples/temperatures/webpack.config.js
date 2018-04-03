/*global __dirname*/
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: __dirname + "/build",
    filename: "generated-app.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      joi: "joi-browser"
    }
  }
};
