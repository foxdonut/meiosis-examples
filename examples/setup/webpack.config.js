/*global __dirname*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "bobril": "./bobril/index.js",
    "deku": "./deku/index.js",
    "diojs": "./diojs/index.js",
    "domvm": "./domvm/index.js",
    "inferno": "./inferno/index.js",
    "maquette": "./maquette/index.js",
    "mithril": "./mithril/index.js",
    "petit-dom": "./petit-dom/index.js",
    "picodom": "./picodom/index.js",
    "preact": "./preact/index.js",
    "react": "./react/index.js",
    "snabbdom": "./snabbdom/index.js"
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
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              ["transform-react-jsx", {
                "pragma": "jsx"
              }]
            ]
          }
        }
      }
    ]
  },
  // Only needed for Bobril
  plugins: [
    new webpack.DefinePlugin({
      "DEBUG": false
    })
  ]
};
