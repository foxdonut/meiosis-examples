import m from "mithril";

export const counter = {
  model: label => ({
    label,
    value: 0
  }),
  create: () => model => m("div.mt2.mb2", model.label + ": " + model.value)
};
