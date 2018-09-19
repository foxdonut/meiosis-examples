module.exports = {
  model: (id, label) => ({ [id]: {
    label,
    value: 0
  } }),
  createView: () => (model, id) => ["div", model[id].label + ": " + model[id].value]
}
