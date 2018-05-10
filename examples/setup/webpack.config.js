/*global __dirname*/
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "deku": "./deku/index.js",
    "diojs": "./diojs/index.js",
    "domvm": "./domvm/index.js",
    "hyperHTML": "./hyperHTML/index.js",
    "inferno": "./inferno/index.js",
    "lit-html": "./lit-html/index.js",
    "mithril": "./mithril/index.js",
    "petit-dom": "./petit-dom/index.js",
    "preact": "./preact/index.js",
    "react": "./react/index.js",
    "snabbdom": "./snabbdom/index.js",
    "ultradom": "./ultradom/index.js"
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
};
