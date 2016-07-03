module.exports = {
  entry: "./vanillajs/app.js",
  devtool: "source-map",
  output: {
    path: "./vanillajs/",
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
