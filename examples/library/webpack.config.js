/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var variant = process.env.VARIANT;
var webpack = require("webpack");

module.exports = {
  entry: "./src/client/index-" + variant + ".ts",
  devtool: "source-map",
  output: {
    path: "./build",
    filename: "generated-" + variant + "-app" + (isProduction ? ".min" : "") + ".js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            declaration: false
          }
        },
      }
    ]
  },
  node: {
    fs: "empty"
  },
  /*
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  */
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
