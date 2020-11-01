import m from "mithril"

export const Counter = {
  view: ({ attrs: { local } }) => m("div", local.state.label + " " + local.state.value)
}
