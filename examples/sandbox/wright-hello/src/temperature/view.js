import m from "mithril";
import b from "bss";
import { safe, wrap } from "../util/handler";

const precipitationOption = ({ model, actions, id, value, label }) =>
  m("span" + b.mr(4), [
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
    m("div" + b.mt(4), [
      precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"}),
      precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"}),
      precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})
    ]),
    m("div" + b.mt(4), [
      "Date:",
      m("input" + b.ml(4), { type: "text", size: "10", value: model.date, oninput: safe(actions.editDate) })
    ]),
    m("div" + b.mt(4), [
      m("span", "Temperature: "),
      m("span", { class: "tempValue" }, model.value),
      m("span", { innerHTML: "&deg;" }),
      m("span", { class: "tempUnits" }, model.units)
    ]),
    m("div" + b.mt(4), [
      m("button" + b.bc("lightgray"), { onclick: wrap(actions.increase, 1) }, "Increase"),
      m("button" + b.bc("lightgray").ml(4), { onclick: wrap(actions.increase, -1) }, "Decrease")
    ]),
    m("div" + b.mt(4), [
      m("button" + b.c("white").bc("blue"),
        { onclick: safe(actions.changeUnits) }, "Change Units")
    ])
  ]);
