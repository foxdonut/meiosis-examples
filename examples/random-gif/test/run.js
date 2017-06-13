// Credit: https://github.com/orbitbot/mithril-bootstrap/blob/master/tests.js

require("reify");
const o = require("ospec");
const glob = require("glob");

require("./setup-browser-env");

glob("test/**/*-tests.js", { ignore: "node_modules/**" }, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach(path => require("." + path.replace(/test/, "")));
  o.run();
});
