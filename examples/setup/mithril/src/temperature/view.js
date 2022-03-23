import m from "mithril"
import b from "bss"
import { Button, ButtonGroup } from "polythene-mithril"

import { actions } from "./actions"

export const Temperature = {
  view: ({ attrs: { cell } }) =>
    m(
      "div",
      m(
        "div" + b.mt(8),
        m("label", "Temperature: ", cell.state.value, m.trust("&deg;"), cell.state.units)
      ),
      m(
        "div" + b.mt(8),
        m(ButtonGroup, [
          m(Button, {
            label: "Increment",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue", marginRight: "12px" },
            events: { onclick: () => actions.increment(cell, 1) }
          }),
          m(Button, {
            label: "Decrement",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue", marginRight: "12px" },
            events: { onclick: () => actions.increment(cell, -1) }
          }),
          m(Button, {
            label: "Change Units",
            raised: true,
            style: { color: "white", backgroundColor: "MediumSeaGreen" },
            events: { onclick: () => actions.changeUnits(cell) }
          })
        ])
      )
    )
}
