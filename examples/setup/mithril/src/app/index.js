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
    airTemperature: temperature.Initial(),
    waterTemperature: temperature.Initial()
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
  view: ({ attrs: { context } }) =>
    m(
      "div",
      m("div" + b.f("left").w("40%").pr(40), m(DateTime, { context: context.nest("dateTime") })),
      m(
        "div" + b.f("left"),
        m(Conditions, { context: context.nest("conditions") }),
        m(Temperature, { context: context.nest("airTemperature") }),
        m(Temperature, { context: context.nest("waterTemperature") })
      )
    )
}
