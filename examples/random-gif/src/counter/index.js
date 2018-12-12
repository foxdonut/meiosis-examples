import m from "mithril"

export const counter = {
  model: ({ label }) => ({
    label,
    value: 0
  })
}

export const Counter = {
  view: ({ attrs: { model, id } }) => m("div", model[id].label + " " + model[id].value)
}
