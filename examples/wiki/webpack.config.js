/*global __dirname*/
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "part-01-ex-01": "./part-01/index-01.jsx",
    "part-01-ex-02": "./part-01/index-02.jsx",
    "part-01-ex-03": "./part-01/03/index.js",
    "part-01-ex-04": "./part-01/04/index.js",
    "part-02-ex-01": "./part-02/01/index.js",
    "part-02-ex-02": "./part-02/02/index.js",
    "part-03-ex-01": "./part-03/01/index.js",
    "part-03-ex-02": "./part-03/02/index.js",
    "part-03-ex-03": "./part-03/03/index.js",
    "part-03-ex-04": "./part-03/04/index.js",
    "part-04-ex-01": "./part-04/01/index.js",
    "part-04-ex-02": "./part-04/02/index.js",
    "part-04-ex-03": "./part-04/03/index.js",
    "part-04-ex-04": "./part-04/04/index.js",
    "part-06-ex-01": "./part-06/index-01.jsx",
    "part-06-ex-02": "./part-06/index-02.jsx",
    "part-06-ex-03": "./part-06/index-03.js",
    "part-06-ex-04": "./part-06/index-04.js",

    "react-component": "./sandbox/react-component.jsx"
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
    "preact": "preact",
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
