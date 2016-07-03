module.exports = {
  entry: "./jquery/app.js",
  devtool: "source-map",
  output: {
    path: "./jquery/",
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
