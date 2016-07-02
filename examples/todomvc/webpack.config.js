module.exports = {
  entry: "./mithril/app.js",
  devtool: "source-map",
  output: {
    path: "./mithril/",
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
