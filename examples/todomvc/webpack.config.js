module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  output: {
    path: "./build",
    filename: "generated-app.js"
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
  node: {
    fs: "empty"
  },
};
