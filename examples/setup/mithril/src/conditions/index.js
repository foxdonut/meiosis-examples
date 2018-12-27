import m from "mithril"
import b from "bss"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const conditions = {
  initialState,
  actions
}

const conditionsOption = ({ state, actions, value, label }) => (
  m("span",
    m("input", { type: "radio", id: value, name: "conditions", value,
      checked: state.conditions.sky === value,
      onchange: evt => actions.changeSky(evt.target.value)
    }),
    m("label" + b.ml(4).mr(8), { for: value }, label)
  )
)

export const Conditions = {
  view: vnode => {
    const { state, actions } = vnode.attrs

    return (
      m("div" + b.mt(8),
        m("div",
          m("input", { type: "checkbox", id: "precipitations",
            checked: state.conditions.precipitations,
            onchange: evt => actions.togglePrecipitations(evt.target.checked)
          }),
          m("label" + b.ml(4), { for: "precipitations" }, "Precipitations")
        ),
        m("div" + b.mt(4),
          conditionsOption({ state, actions, value: "SUNNY", label: "Sunny"}),
          conditionsOption({ state, actions, value: "CLOUDY", label: "Cloudy"}),
          conditionsOption({ state, actions, value: "MIX", label: "Mix of sun and clouds"})
        )
      )
    )
  }
}
