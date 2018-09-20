const O = require("patchinko/constant")
const R = require("ramda")

module.exports = {
  model: (id, label) => R.objOf(id, {
    label,
    value: 0
  }),
  createView: () => (model, id) => ["div", model[id].label + ": " + model[id].value],
  onUpdate: (model, obj) => {
    if (obj.event === "newGifGenerated") {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1
      return Object.assign(obj, {
        counter: O({ value: O(R.add(increment)) })
      })
    }
    return obj
  }
}
