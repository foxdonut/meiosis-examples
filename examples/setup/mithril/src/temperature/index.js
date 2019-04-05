import m from "mithril"
import b from "bss"
import { Button, ButtonGroup } from "polythene-mithril"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const temperature = {
  initialState,
  actions
}

export const Temperature = {
  view: vnode => {
    const { local } = vnode.attrs

    return m(
      "div",
      m(
        "div" + b.mt(8),
        m(
          "label",
          local.state.label,
          "Temperature: ",
          local.state.value,
          m.trust("&deg;"),
          local.state.units
        )
      ),
      m(
        "div" + b.mt(8),
        m(ButtonGroup, [
          m(Button, {
            label: "Increment",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue" },
            events: { onclick: () => local.update(actions.increment(1)) }
          }),
          m(Button, {
            label: "Decrement",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue" },
            events: { onclick: () => local.update(actions.increment(-1)) }
          }),
          m(Button, {
            label: "Change Units",
            raised: true,
            style: { color: "white", backgroundColor: "MediumSeaGreen" },
            events: { onclick: () => local.update(actions.changeUnits()) }
          })
        ])
      )
    )
  }
}
