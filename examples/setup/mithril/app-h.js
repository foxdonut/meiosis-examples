import m from "mithril"

import { model } from "../common/model"
import { actions } from "../common/actions"

export const app = {
  model,
  actions
}

const precipitationOption = ({ model, actions, id, value, label }) =>
  m("span",
    m("input", { type: "radio", id, name: "precipitation",
      value, checked: model.precipitation === value,
      onchange: actions.changePrecipitation
    }),
    m("label", { htmlFor: id }, label)
  )

export const App = {
  view: ({ attrs: { model, actions } }) =>
    m("div",
      m("div",
        m("input", { type: "checkbox", id: "precipitations",
          checked: model.precipitations,
          onchange: actions.togglePrecipitations
        }),
        m("label", { htmlFor: "precipitations" }, "Precipitations")
      ),
      m("div",
        precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"}),
        precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"}),
        precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})
      ),
      m("div",
        "Date:",
        m("input", { type: "text", size: "10", value: model.date, oninput: actions.editDate })
      ),
      m("span", "Temperature: "),
      m("span.tempValue", model.value),
      m("span", { innerHTML: "&deg;" }),
      m("span.tempUnits", model.units),
      m("div",
        m("button.btn.btn-default.increase", { onclick: () => actions.increase( 1) }, "Increase"),
        m("button.btn.btn-default.decrease", { onclick: () => actions.increase(-1) }, "Decrease")
      ),
      m("div",
        m("button.btn.btn-primary.changeUnits", { onclick: actions.changeUnits }, "Change Units")
      )
    )
}
