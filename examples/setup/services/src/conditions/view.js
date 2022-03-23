import m from "mithril"
import b from "bss"
import { Checkbox, RadioGroup } from "polythene-mithril"

export const Conditions = {
  view: ({ attrs: { context } }) =>
    m(
      "div" + b.mt(8),
      m(
        "div",
        m(Checkbox, {
          label: "Precipitations",
          checked: context.getState().precipitations,
          onChange: ({ checked }) => context.actions.togglePrecipitations(checked)
        })
      ),
      m(
        "div" + b.mt(4),
        m(RadioGroup, {
          name: "conditions",
          checkedValue: context.getState().sky,
          onChange: ({ value }) => context.actions.changeSky(value),
          buttons: [
            { value: "SUNNY", label: "Sunny" },
            { value: "CLOUDY", label: "Cloudy" },
            { value: "MIX", label: "Mix of sun and clouds" }
          ]
        })
      )
    )
}
