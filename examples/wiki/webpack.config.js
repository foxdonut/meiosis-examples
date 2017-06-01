/*global __dirname*/

module.exports = {
  entry: {
    "part-01-ex-01": "./part-01/index-01.jsx",
    "part-01-ex-02": "./part-01/index-02.jsx",
    "part-01-ex-03": "./part-01/index-03.jsx",
    "part-01-ex-04": "./part-01/index-04.jsx",
    "part-01-ex-05": "./part-01/index-05.jsx",
    "part-02-ex-01": "./part-02/index-01.jsx",
    "part-02-ex-02": "./part-02/index-02.jsx",
    "part-02-ex-03": "./part-02/index-03.jsx",
    "part-02-ex-04": "./part-02/index-04.jsx",
    "part-03-ex-01": "./part-03/index-01.jsx",
    "part-03-ex-02": "./part-03/index-02.jsx",
    "part-03-ex-03": "./part-03/index-03.jsx",
    "part-03-ex-04": "./part-03/index-04.jsx",
    "part-05-ex-01": "./part-05/01/index.js",
    "part-05-ex-02": "./part-05/02/index.js",
    "part-05-ex-03": "./part-05/03/index.js",
    "part-05-ex-04": "./part-05/04/index.js",
    "part-05-ex-05": "./part-05/05/index.js",
    "part-06-ex-01": "./part-06/index-01.jsx",
    "part-06-ex-02": "./part-06/index-02.jsx",
    "part-06-ex-03": "./part-06/index-03.js",
    "part-06-ex-04": "./part-06/index-04.js",
    "part-06-ex-05": "./part-06/index-05.js"
  },
  output: {
    path: __dirname + "/build",
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
  }
};
