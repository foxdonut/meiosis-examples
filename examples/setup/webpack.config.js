/*global __dirname*/
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "jsx-diojs": "./diojs/index.jsx",
    "jsx-domvm": "./domvm/index.jsx",
    "hyperHTML": "./hyperHTML/index.js",
    "jsx-inferno": "./inferno/index.jsx",
    "lit-html": "./lit-html/index.js",
    "jsx-mithril": "./mithril/index.jsx",
    "jsx-petit-dom": "./petit-dom/index.jsx",
    "jsx-preact": "./preact/index.jsx",
    "jsx-react": "./react/index.jsx",
    "jsx-snabbdom": "./snabbdom/index.jsx",
    "js-diojs": "./diojs/index.js",
    "js-domvm": "./domvm/index.js",
    "js-inferno": "./inferno/index.js",
    "js-mithril": "./mithril/index.js",
    "js-petit-dom": "./petit-dom/index.js",
    "js-preact": "./preact/index.js",
    "js-react": "./react/index.js",
    "js-snabbdom": "./snabbdom/index.js"
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
