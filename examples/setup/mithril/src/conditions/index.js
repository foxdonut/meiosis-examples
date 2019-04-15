import m from "mithril"
import b from "bss"
import { Checkbox, RadioGroup } from "polythene-mithril"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

export const Conditions = {
  view: vnode => {
    const { context } = vnode.attrs
    const { state } = context

    return m(
      "div" + b.mt(8),
      m(
        "div",
        m(Checkbox, {
          label: "Precipitations",
          checked: state.conditions.precipitations,
          onChange: ({ checked }) => actions.togglePrecipitations(context, checked)
        })
      ),
      m(
        "div" + b.mt(4),
        m(RadioGroup, {
          name: "conditions",
          checkedValue: state.conditions.sky,
          onChange: ({ value }) => actions.changeSky(context, value),
          buttons: [
            { value: "SUNNY", label: "Sunny" },
            { value: "CLOUDY", label: "Cloudy", style: { marginLeft: "32px" } },
            { value: "MIX", label: "Mix of sun and clouds", style: { marginLeft: "32px" } }
          ]
        })
      )
    )
  }
}
