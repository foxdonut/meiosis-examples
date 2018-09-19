const O = require("patchinko/constant")
const R = require("ramda")

const { button } = require("../util/ui")

const createActions = update => ({
  toggle: id => _event => update(R.objOf(id, O({ active: O(x => !x) })))
})

module.exports = {
  model: id => R.objOf(id, {
    active: false
  }),
  createActions,
  createView: ({ actions }) => (model, id) => {
    const bc = model[id].active ? "green" : "red"
    const label = model[id].active ? "Active" : "Inactive"
    return ["button.bg-" + bc + button, { onclick: actions.toggle(id) }, label]
  }
}
