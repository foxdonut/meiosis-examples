import { h } from "dio.js";
import { safe, wrap } from "../util/handler";

const precipitationOption = ({ model, actions, id, value, label }) =>
  h("span", [
    h("input", { type: "radio", id, name: "precipitation", value,
      checked: model.precipitation === value,
      onClick: safe(actions.changePrecipitation) }, []),
    h("label", { for: id }, label)
  ]);

export const createView = actions => model =>
  h("div", [
    h("div", [
      h("input", { type: "checkbox", checked: model.precipitations,
        onClick: safe(actions.togglePrecipitations), id: "precipitations" }),
      h("label", { for: "precipitations" }, "Precipitations")
    ]),
    h("div", [
      precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"}),
      precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"}),
      precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})
    ]),
    h("div", [
      "Date:",
      h("input", { type: "text", size: "10", value: model.date, onInput: safe(actions.editDate) })
    ]),
    h("span", "Temperature: "),
    h("span", { class: "tempValue" }, model.value),
    h("span", { innerHTML: "&deg;" }),
    h("span", { class: "tempUnits" }, model.units),
    h("div", [
      h("button", { class: "btn btn-default decrease", onClick: wrap(actions.increase, 1) }, "Increase"),
      h("button", { class: "btn btn-default decrease", onClick: wrap(actions.increase, -1) }, "Decrease")
    ]),
    h("div", [
      h("button", { class: "btn btn-primary changeUnits", onClick: safe(actions.changeUnits) }, "Change Units")
    ])
  ]);
