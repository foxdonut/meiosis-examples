import m from "mithril"

import { buttonStyle } from "../util/ui"

export const Button = {
  view: ({ attrs: { state, local, actions } }) => {
    const bc = local.get(state).active ? "green" : "red"
    const label = local.get(state).active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: () => actions.buttonToggle(local) }, label)
  }
}
