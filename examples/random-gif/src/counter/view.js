import m from "mithril"

export const Counter = {
  view: ({ attrs: { context } }) => m("div", context.state.label + " " + context.state.value)
}
