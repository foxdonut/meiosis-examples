/*global __dirname*/
var views = require("co-views");

module.exports = views(__dirname + "./../examples", {
  map: { html: "swig" }
});
