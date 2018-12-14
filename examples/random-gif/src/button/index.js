import m from "mithril"
import { PS, S } from "patchinko/explicit"

import { buttonStyle } from "../util/ui"

export const button = {
  initialState: () => ({
    active: false
  }),
  actions: ({ update }) => ({
    toggle: id => _evt => update({ [id]: PS({ active: S(x => !x) }) })
  })
}

export const Button = {
  view: ({ attrs: { state, id, actions } }) => {
    const bc = state[id].active ? "green" : "red"
    const label = state[id].active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: actions.toggle(id) }, label)
  }
}
