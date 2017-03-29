import m from "mithril";

export const counter = {
  model: () => ({
    value: 0
  }),
  create: label => model => m("div.mt2.mb2", label + model.value)
};
