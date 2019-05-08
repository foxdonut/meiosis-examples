import m from "mithril"
import b from "bss"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

import "polythene-css/dist/polythene.css"
import "polythene-css/dist/polythene-typography.css"

export const app = {
  Initial: () => Object.assign({}, dateTime.Initial(), conditions.Initial(), temperature.Initial()),

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
        m(DateTime, { state, actions })
      ),
      m("div" + b.f("left"), m(Conditions, { state, actions }), m(Temperature, { state, actions }))
    )
}
