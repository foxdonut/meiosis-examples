const wright = require("wright");
const browserify = require("browserify");

function compile() {
  return new Promise((resolve, reject) => {
    browserify("./src/index.js")
      .transform("babelify", { presets: ["env"] })
      .bundle((err, src) => err ? reject(err) : resolve(src.toString()));
  });
}

wright({
  main: "index.html",
  debug: true,
  run: "rerender",
  js: {
    watch: "src/**/*.js",
    compile: compile
  }
});
