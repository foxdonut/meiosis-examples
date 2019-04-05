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
    const { root } = vnode.attrs

    return m(
      "div" + b.mt(8),
      m(
        "div",
        m(Checkbox, {
          label: "Precipitations",
          checked: root.state.conditions.precipitations,
          onChange: ({ checked }) => root.update(actions.togglePrecipitations(checked))
        })
      ),
      m(
        "div" + b.mt(4),
        m(RadioGroup, {
          name: "conditions",
          checkedValue: root.state.conditions.sky,
          onChange: ({ value }) => root.update(actions.changeSky(value)),
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
