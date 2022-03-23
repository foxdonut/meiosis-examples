/*global __dirname*/
var path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "generated-app.js"
  },
  resolve: {
    extensions: [".js"]
    /*
    , alias: {
      // NB: Keep these in this order
      "mithril/stream": path.resolve(".", "node_modules/mithril/stream/stream.js"),
      "mithril": path.resolve(".", "node_modules/mithril/mithril.js"),
    }
    */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  }
}
