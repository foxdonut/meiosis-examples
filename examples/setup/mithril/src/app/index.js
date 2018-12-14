import m from "mithril"

import { initialState } from "./initialState"
import { actions } from "./actions"

export const app = {
  initialState,
  actions
}

const precipitationOption = ({ state, actions, id, value, label }) =>
  m("span",
    m("input", { type: "radio", id, name: "precipitation",
      value, checked: state.precipitation === value,
      onchange: actions.changePrecipitation
    }),
    m("label", { htmlFor: id }, label)
  )

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m("div",
      m("div",
        m("input", { type: "checkbox", id: "precipitations",
          checked: state.precipitations,
          onchange: actions.togglePrecipitations
        }),
        m("label", { htmlFor: "precipitations" }, "Precipitations")
      ),
      m("div",
        precipitationOption({ state, actions, id: "rain", value: "RAIN", label: "Rain"}),
        precipitationOption({ state, actions, id: "snow", value: "SNOW", label: "Snow"}),
        precipitationOption({ state, actions, id: "sleet", value: "SLEET", label: "Sleet"})
      ),
      m("div",
        "Date:",
        m("input", { type: "text", size: "10", value: state.date, oninput: actions.editDate })
      ),
      m("span", "Temperature: "),
      m("span.tempValue", state.value),
      m("span", { innerHTML: "&deg;" }),
      m("span.tempUnits", state.units),
      m("div",
        m("button.btn.btn-default.increase", { onclick: () => actions.increase( 1) }, "Increase"),
        m("button.btn.btn-default.decrease", { onclick: () => actions.increase(-1) }, "Decrease")
      ),
      m("div",
        m("button.btn.btn-primary.changeUnits", { onclick: actions.changeUnits }, "Change Units")
      )
    )
}
