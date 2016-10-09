/*global process*/
var isProduction = process.env.NODE_ENV === "production";
var webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.ts",
  devtool: "source-map",
  output: {
    path: ".",
    filename: "generated-app" + (isProduction ? ".min" : "") + ".js"
  },
  resolve: {
    extensions: ["", ".js", ".ts", ".tsx"]
  },
  ts: {
    compilerOptions: {
      declaration: false
    }
  },
  module: {
    noParse: [
      /node_modules\/sinon/
    ],
    loaders: [
      {
        loader: "ts",
        test: /\.tsx?$/,
        exclude: /node_modules/
      }
    ],
    preloaders: [
      {
        loader: "source-map",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};
