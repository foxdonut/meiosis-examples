import m from "mithril"

export const counter = {
  initialState: ({ label }) => ({
    label,
    value: 0
  })
}

export const Counter = {
  view: ({ attrs: { local } }) => m("div", local.state.label + " " + local.state.value)
}
