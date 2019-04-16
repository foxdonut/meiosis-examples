import m from "mithril"
import b from "bss"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"
import { lensProp } from "../util"

import "polythene-css/dist/polythene.css"
import "polythene-css/dist/polythene-typography.css"

export const app = {
  initialState: () =>
    Object.assign(
      {},
      dateTime.initialState(),
      conditions.initialState(),
      { air: temperature.initialState("Air") },
      { water: temperature.initialState("Water") }
    ),

  actions: update =>
    Object.assign(
      {},
      conditions.actions(update),
      dateTime.actions(update),
      temperature.actions(update)
    )
}

export const App = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div",
      m(
        "div" +
          b
            .f("left")
            .w("40%")
            .pr(40),
        m(DateTime, { context, actions })
      ),
      m(
        "div" + b.f("left"),
        m(Conditions, { context, actions }),
        m(Temperature, { context: lensProp(context, "air"), actions }),
        m(Temperature, { context: lensProp(context, "water"), actions })
      )
    )
}
