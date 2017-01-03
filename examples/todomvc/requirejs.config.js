/*global requirejs*/
requirejs.config({
  paths: {
    "classnames": "/public/lib/classnames.min",
    "history": "/public/lib/history.min",
    "meiosis": "/public/lib/meiosis.min",
    "meiosis-tracer": "/public/lib/meiosis-tracer.min",
    "mithril": "/public/lib/mithril.min",
    "union-type": "/public/lib/union-type"
  },
  map: {
    "*": {
      "m": "mithril"
    }
  }
});
