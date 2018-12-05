const m = require("mithril")

exports.counter = {
  model: ({ label }) => ({
    label,
    value: 0
  })
}

exports.Counter = {
  view: ({ attrs: { model, id } }) => m("div", model[id].label + " " + model[id].value)
}
