// @ts-check
import m from "mithril"

export const Counter = {
  view: ({ attrs: { cell } }) => m("div", cell.getState().label + " " + cell.getState().value)
}
