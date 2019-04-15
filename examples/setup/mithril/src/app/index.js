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
    )
}

export const App = {
  view: vnode => {
    const { context } = vnode.attrs

    return m(
      "div",
      m(
        "div" +
          b
            .f("left")
            .w("40%")
            .pr(40),
        m(DateTime, { context })
      ),
      m(
        "div" + b.f("left"),
        m(Conditions, { context }),
        m(Temperature, { context: lensProp(context, "air") }),
        m(Temperature, { context: lensProp(context, "water") })
      )
    )
  }
}
