// @ts-check
import m from "mithril"
import { buttonStyle } from "../util/ui"

const initial = {
  active: false
}

const actions = {
  buttonToggle: cell => cell.update({ active: x => !x })
}

export const button = {
  initial
}

export const Button = {
  view: ({ attrs: { cell } }) => {
    const state = cell.getState()
    const bc = state.active ? "green" : "red"
    const label = state.active ? "Active" : "Inactive"
    return m("button.bg-" + bc + buttonStyle, { onclick: () => actions.buttonToggle(cell) }, label)
  }
}
