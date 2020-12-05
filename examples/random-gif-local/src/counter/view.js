import m from "mithril"

export const Counter = {
  view: ({ attrs: { state } }) => m("div", state.label + " " + state.value)
}
