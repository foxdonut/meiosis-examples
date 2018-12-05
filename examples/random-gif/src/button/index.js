const m = require("mithril")
const O = require("patchinko/constant")
const R = require("ramda")

const { button } = require("../util/ui")

const actions = update => ({
  toggle: id => _event => update(R.objOf(id, O({ active: O(x => !x) })))
})

exports.button = {
  model: () => ({
    active: false
  }),
  actions
}

exports.Button = {
  view: ({ attrs: { model, id, actions } }) => {
    const bc = model[id].active ? "green" : "red"
    const label = model[id].active ? "Active" : "Inactive"
    return m("button.bg-" + bc + button, { onclick: actions.toggle(id) }, label)
  }
}
