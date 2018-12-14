import m from "mithril"

export const counter = {
  initialState: ({ label }) => ({
    label,
    value: 0
  })
}

export const Counter = {
  view: ({ attrs: { state, id } }) => m("div", state[id].label + " " + state[id].value)
}
