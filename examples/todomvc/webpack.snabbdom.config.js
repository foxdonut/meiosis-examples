module.exports = {
  entry: "./snabbdom/app.js",
  devtool: "source-map",
  output: {
    path: "./snabbdom/",
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
