import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.js",
  output: {
    file: "build/generated-app.js",
    format: "iife"
  },
  plugins: [
    buble({
      jsx: "preact.h"
    }),
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/meiosis/lib/index.js": ["trace"]
      }
    })
  ]
};
