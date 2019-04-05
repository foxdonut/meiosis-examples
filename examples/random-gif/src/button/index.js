import m from "mithril"
import O from "patchinko/constant"

import { buttonStyle } from "../util/ui"

export const button = {
  initialState: () => ({
    active: false
  }),
  actions: {
    toggle: () => ({ active: O(x => !x) })
  }
}

export const Button = {
  view: ({ attrs: { local } }) => {
    const bc = local.state.active ? "green" : "red"
    const label = local.state.active ? "Active" : "Inactive"
    return m(
      "button.bg-" + bc + buttonStyle,
      { onclick: () => local.update(button.actions.toggle()) },
      label
    )
  }
}
