import m from "mithril"

import { buttonStyle } from "../util/ui"

export const Button = {
  view: ({ attrs: { state, id, actions } }) => {
    const bc = state[id].active ? "green" : "red"
    const label = state[id].active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: () => actions.buttonToggle(id) }, label)
  }
}
