/*global require, module, __dirname*/
var path = require("path");

module.exports = {
  entry: {
    "01-streams": "./01-streams/index.js",
    "02-setup": "./02-setup/index.jsx",
    "02-setup-inferno": "./02-setup/inferno/index.jsx",
    "02-setup-mithril": "./02-setup/mithril/index.js",
    "02-setup-picodom": "./02-setup/picodom/index.jsx",
    "02-setup-preact": "./02-setup/preact/index.jsx",
    "02-setup-snabbdom": "./02-setup/snabbdom/index.js",
    "03-component": "./03-component/index.js",
    "04-reusable": "./04-reusable/index.js",
    "05-eliminating-path-repetition": "./05-eliminating-path-repetition",
    "06-computed-properties": "./06-computed-properties/index.js",
    "07-routing": "./07-routing/index.js"
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
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    "inferno": "Inferno",
    "mithril": "m",
    "picodom": "picodom",
    "preact": "preact",
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
