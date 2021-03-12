import m from "mithril"
import b from "bss"
import { Button, ButtonGroup } from "polythene-mithril"

const increment = (temperature, amount, actions) => {
  temperature.value += amount
  actions.temperatureChange(temperature)
}

const changeUnits = (temperature, actions) => {
  if (temperature.units === "C") {
    temperature.units = "F"
    temperature.value = Math.round((temperature.value * 9) / 5 + 32)
  } else {
    temperature.units = "C"
    temperature.value = Math.round(((temperature.value - 32) / 9) * 5)
  }
  actions.temperatureChange(temperature)
}

export const Temperature = () => {
  const local = {
    value: 21,
    units: "C"
  }

  return {
    view: ({ attrs: { context } }) =>
      m(
        "div",
        m("div" + b.mt(8), m("label", "Temperature: ", local.value, m.trust("&deg;"), local.units)),
        m(
          "div" + b.mt(8),
          m(ButtonGroup, [
            m(Button, {
              label: "Increment",
              raised: true,
              style: { color: "white", backgroundColor: "DodgerBlue", marginRight: "12px" },
              events: { onclick: () => increment(local, 1, context.actions) }
            }),
            m(Button, {
              label: "Decrement",
              raised: true,
              style: { color: "white", backgroundColor: "DodgerBlue", marginRight: "12px" },
              events: { onclick: () => increment(local, -1, context.actions) }
            }),
            m(Button, {
              label: "Change Units",
              raised: true,
              style: { color: "white", backgroundColor: "MediumSeaGreen" },
              events: { onclick: () => changeUnits(local, context.actions) }
            })
          ])
        )
      )
  }
}
