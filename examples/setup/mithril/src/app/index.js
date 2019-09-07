import m from "mithril"
import b from "bss"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

import "polythene-css/dist/polythene.css"
import "polythene-css/dist/polythene-typography.css"

export const app = {
  Initial: () => ({
    dateTime: dateTime.Initial(),
    conditions: conditions.Initial(),
    "temperature:air": temperature.Initial(),
    "temperature:water": temperature.Initial()
  }),

  Actions: update =>
    Object.assign(
      {},
      conditions.Actions(update),
      dateTime.Actions(update),
      temperature.Actions(update)
    )
}

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div",
      m(
        "div" +
          b
            .f("left")
            .w("40%")
            .pr(40),
        m(DateTime, { state, id: "dateTime", actions })
      ),
      m(
        "div" + b.f("left"),
        m(Conditions, { state, id: "conditions", actions }),
        m(Temperature, { state, id: "temperature:air", actions }),
        m(Temperature, { state, id: "temperature:water", actions })
      )
    )
}
