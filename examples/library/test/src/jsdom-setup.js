var jsdom = require("jsdom").jsdom;
var id = "app";

var jsdomSetup = function() {
  global.document = jsdom("<div id='" + id + "'></div>");
  global.window = document.defaultView;
  global.navigator = {
    userAgent: "node.js"
  };
};

module.exports = jsdomSetup;
