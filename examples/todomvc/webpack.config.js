/*global process*/
var variant = process.env.VARIANT;

module.exports = {
  entry: "./src/index-" + variant + ".ts",
  devtool: "source-map",
  output: {
    path: "./build",
    filename: "generated-" + variant + "-app.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            declaration: false
          }
        },
      }
    ]
  },
  /*
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  */
  node: {
    fs: "empty"
  },
};
