import m from "mithril"
import { PS, S } from "patchinko/explicit"

import { buttonStyle } from "../util/ui"

const actions = update => ({
  toggle: id => _evt => update({ [id]: PS({ active: S(x => !x) }) })
})

export const button = {
  model: () => ({
    active: false
  }),
  actions
}

export const Button = {
  view: ({ attrs: { model, id, actions } }) => {
    const bc = model[id].active ? "green" : "red"
    const label = model[id].active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: actions.toggle(id) }, label)
  }
}
