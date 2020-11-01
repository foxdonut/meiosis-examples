import m from "mithril"

import { buttonStyle } from "../util/ui"

export const Button = {
  view: ({ attrs: { local, actions } }) => {
    const bc = local.state.active ? "green" : "red"
    const label = local.state.active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: () => actions.buttonToggle(local) }, label)
  }
}
