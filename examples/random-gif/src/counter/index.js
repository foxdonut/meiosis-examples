// @ts-check
import m from "mithril"

const Initial = ({ label }) => ({
  label,
  value: 0
})

export const counter = {
  Initial
}

export const Counter = {
  view: ({ attrs: { cell } }) => m("div", cell.state.label + " " + cell.state.value)
}
