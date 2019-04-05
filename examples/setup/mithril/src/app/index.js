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
    const { root } = vnode.attrs

    return m(
      "div",
      m(
        "div" +
          b
            .f("left")
            .w("40%")
            .pr(40),
        m(DateTime, { root })
      ),
      m(
        "div" + b.f("left"),
        m(Conditions, { root }),
        m(Temperature, { root, local: lensProp(root, "air") }),
        m(Temperature, { root, local: lensProp(root, "water") })
      )
    )
  }
}
