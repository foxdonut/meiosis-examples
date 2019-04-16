import m from "mithril"

import { buttonStyle } from "../util/ui"

export const Button = {
  view: ({ attrs: { context, actions } }) => {
    const bc = context.state.active ? "green" : "red"
    const label = context.state.active ? "Active" : "Inactive"
    return m(
      "button.bg-" + bc + buttonStyle,
      { onclick: () => actions.buttonToggle(context) },
      label
    )
  }
}
