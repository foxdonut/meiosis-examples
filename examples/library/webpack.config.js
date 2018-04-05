/*global __dirname, process*/
var isProd = process.env.NODE_ENV === "prod";
var webpack = require("webpack");
var Path = require("path");

var plugins = [
  new webpack.DefinePlugin({
    "SERVICE_URL": JSON.stringify("")
  })
];

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    "domvm": "./src/client/domvm/index.js"
  },
  output: {
    path: Path.join(__dirname, "public"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "domvm": isProd ? "domvm" : "domvm/dist/dev/domvm.dev"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: plugins
};
