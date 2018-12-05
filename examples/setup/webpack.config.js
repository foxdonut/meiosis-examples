/*global __dirname*/
var path = require("path")

module.exports = {
  mode: "development",
  entry: {
    "lit-html": "./lit-html/index.js",
    "jsx-preact": "./preact/index.jsx",
    "jsx-react": "./react/index.jsx",
    "js-mithril": "./mithril/index.js",
    "js-preact": "./preact/index.js",
    "js-react": "./react/index.js",
    "h-mithril": "./mithril/index-h.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
