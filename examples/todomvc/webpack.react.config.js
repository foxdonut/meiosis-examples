module.exports = {
  entry: "./react/app.jsx",
  devtool: "source-map",
  output: {
    path: "./react/",
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
