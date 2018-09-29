const O = require("patchinko/constant")
const R = require("ramda")

const { button } = require("../util/ui")

const actions = update => ({
  toggle: id => _event => update(R.objOf(id, O({ active: O(x => !x) })))
})

module.exports = {
  model: () => ({
    active: false
  }),
  actions,
  view: ({ actions }) => (model, id) => {
    const bc = model[id].active ? "green" : "red"
    const label = model[id].active ? "Active" : "Inactive"
    return ["button.bg-" + bc + button, { onclick: actions.toggle(id) }, label]
  }
}
