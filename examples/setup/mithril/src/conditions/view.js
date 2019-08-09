import m from "mithril"
import b from "bss"
import { Checkbox, RadioGroup } from "polythene-mithril"

export const Conditions = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div" + b.mt(8),
      m(
        "div",
        m(Checkbox, {
          label: "Precipitations",
          checked: state.conditions.precipitations,
          onChange: ({ checked }) => actions.togglePrecipitations(checked)
        })
      ),
      m(
        "div" + b.mt(4),
        m(RadioGroup, {
          name: "conditions",
          checkedValue: state.conditions.sky,
          onChange: ({ value }) => actions.changeSky(value),
          buttons: [
            { value: "SUNNY", label: "Sunny" },
            { value: "CLOUDY", label: "Cloudy" },
            { value: "MIX", label: "Mix of sun and clouds" }
          ]
        })
      )
    )
}
