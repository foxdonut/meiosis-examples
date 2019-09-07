import m from "mithril"
import b from "bss"
import { Checkbox, RadioGroup } from "polythene-mithril"

export const Conditions = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div" + b.mt(8),
      m(
        "div",
        m(Checkbox, {
          label: "Precipitations",
          checked: state[id].precipitations,
          onChange: ({ checked }) => actions.togglePrecipitations(id, checked)
        })
      ),
      m(
        "div" + b.mt(4),
        m(RadioGroup, {
          name: "conditions",
          checkedValue: state[id].sky,
          onChange: ({ value }) => actions.changeSky(id, value),
          buttons: [
            { value: "SUNNY", label: "Sunny" },
            { value: "CLOUDY", label: "Cloudy" },
            { value: "MIX", label: "Mix of sun and clouds" }
          ]
        })
      )
    )
}
