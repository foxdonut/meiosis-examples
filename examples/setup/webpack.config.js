/*global __dirname*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "diojs": "./diojs/index.js",
    "domvm": "./domvm/index.js",
    "inferno": "./inferno/index.js",
    "ivi": "./ivi/index.js",
    "mithril": "./mithril/index.js",
    "petit-dom": "./petit-dom/index.js",
    "picodom": "./picodom/index.js",
    "preact": "./preact/index.js",
    "react": "./react/index.js",
    "snabbdom": "./snabbdom/index.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts"]
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
      }/*,
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              declaration: false
            },
            plugins: [
              ["ivi-jsx"]
            ]
          }
        }
      }*/
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "__IVI_DEV__": true,
      "__IVI_BROWSER__": true
    })
  ]
};
