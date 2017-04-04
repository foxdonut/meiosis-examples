/*global __dirname*/
module.exports = {
  entry: "./index.jsx",
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
  }
};
