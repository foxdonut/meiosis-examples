module.exports = {
  model: ({ label }) => ({
    label,
    value: 0
  }),
  view: () => (model, id) => ["div", model[id].label + ": " + model[id].value]
}
