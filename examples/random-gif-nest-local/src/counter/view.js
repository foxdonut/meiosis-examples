import m from "mithril"

export const Counter = {
  view: ({ attrs: { state, local } }) =>
    m("div", local.get(state).label + " " + local.get(state).value)
}
