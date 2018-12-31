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
    const { state, actions } = vnode.attrs

    return (
      m("div" + b.mt(8),
        m("div",
          m(Checkbox, { label: "Precipitations",
            checked: state.conditions.precipitations,
            onChange: ({ checked }) => actions.togglePrecipitations(checked)
          })
        ),
        m("div" + b.mt(4),
          m(RadioGroup, {
            name: "conditions",
            onChange: ({ value }) => actions.changeSky(value),
            buttons: [
              { value: "SUNNY", label: "Sunny",
                checked: state.conditions.sky === "SUNNY"
              },
              { value: "CLOUDY", label: "Cloudy",
                checked: state.conditions.sky === "CLOUDY",
                style: { marginLeft: "32px" }
              },
              { value: "MIX", label: "Mix of sun and clouds",
                checked: state.conditions.sky === "MIX",
                style: { marginLeft: "32px" }
              }
            ]
          })
        )
      )
    )
  }
}
