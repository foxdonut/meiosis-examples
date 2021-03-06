import m from "mithril"

import { buttonStyle } from "../util/ui"

export const Button = {
  view: ({ attrs: { context } }) => {
    const state = context.getState()
    const bc = state.active ? "green" : "red"
    const label = state.active ? "Active" : "Inactive"
    return m(
      "button.bg-" + bc + buttonStyle,
      { onclick: () => context.actions.buttonToggle() },
      label
    )
  }
}
