const m = require("mithril");
const b = require("bss");

exports.createCounter = label => _update => ({
  model: () => ({
    label,
    value: 0
  }),
  view: model => m("div" + b.mt(8), model.label + ": " + model.value)
});
