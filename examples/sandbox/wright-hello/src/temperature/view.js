import m from "mithril";
import { safe, wrap } from "../util/handler";

const precipitationOption = ({ model, actions, id, value, label }) =>
  m("span", [
    m("input", { type: "radio", id, name: "precipitation", value,
      checked: model.precipitation === value,
      onclick: safe(actions.changePrecipitation) }, []),
    m("label", { for: id }, label)
  ]);

export const createView = actions => model =>
  m("div", [
    m("div", [
      m("input", { type: "checkbox", checked: model.precipitations,
        onclick: safe(actions.togglePrecipitations), id: "precipitations" }),
      m("label", { for: "precipitations" }, "Precipitations")
    ]),
    m("div", [
      precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"}),
      precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"}),
      precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})
    ]),
    m("div", [
      "Date:",
      m("input", { type: "text", size: "10", value: model.date, oninput: safe(actions.editDate) })
    ]),
    m("span", "Temperature: "),
    m("span", { class: "tempValue" }, model.value),
    m("span", { innerHTML: "&deg;" }),
    m("span", { class: "tempUnits" }, model.units),
    m("div", [
      m("button", { class: "btn btn-default decrease", onclick: wrap(actions.increase, 1) }, "Increase"),
      m("button", { class: "btn btn-default decrease", onclick: wrap(actions.increase, -1) }, "Decrease")
    ]),
    m("div", [
      m("button", { class: "btn btn-primary changeUnits", onclick: safe(actions.changeUnits) }, "Change Units")
    ])
  ]);
