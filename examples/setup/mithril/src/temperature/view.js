import m from "mithril"
import b from "bss"
import { Button, ButtonGroup } from "polythene-mithril"

export const Temperature = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div",
      m(
        "div" + b.mt(8),
        m("label", "Temperature: ", state[id].value, m.trust("&deg;"), state[id].units)
      ),
      m(
        "div" + b.mt(8),
        m(ButtonGroup, [
          m(Button, {
            label: "Increment",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue" },
            events: { onclick: () => actions.increment(id, 1) }
          }),
          m(Button, {
            label: "Decrement",
            raised: true,
            style: { color: "white", backgroundColor: "DodgerBlue" },
            events: { onclick: () => actions.increment(id, -1) }
          }),
          m(Button, {
            label: "Change Units",
            raised: true,
            style: { color: "white", backgroundColor: "MediumSeaGreen" },
            events: { onclick: () => actions.changeUnits(id) }
          })
        ])
      )
    )
}
