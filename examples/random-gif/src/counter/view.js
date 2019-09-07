import m from "mithril"

export const Counter = {
  view: ({ attrs: { state, id } }) => m("div", state[id].label + " " + state[id].value)
}
