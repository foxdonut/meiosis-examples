import m from "mithril"
import b from "bss"

import { conditions, Conditions } from "../conditions"
import { dateTime, DateTime } from "../dateTime"
import { temperature, Temperature } from "../temperature"

import "polythene-css/dist/polythene.css"
import "polythene-css/dist/polythene-typography.css"

export const app = {
  initialState: () => Object.assign({},
    dateTime.initialState(),
    conditions.initialState(),
    { air: temperature.initialState("Air") },
    { water: temperature.initialState("Air") }
  ),
  actions: update => Object.assign({},
    dateTime.actions(update),
    conditions.actions(update),
    temperature.actions(update)
  )
}

export const App = {
  view: vnode => {
    const { state, actions } = vnode.attrs

    return (
      m("div",
        m("div" + b.f("left").w("40%").pr(40),
          m(DateTime, { state, actions })
        ),
        m("div" + b.f("left"),
          m(Conditions, { state, actions }),
          m(Temperature, { state, id: "air", actions }),
          m(Temperature, { state, id: "water", actions })
        )
      )
    )
  }
}
