import m from "mithril";

export const createCounter = label => _update => ({
  model: () => ({
    label,
    value: 0
  }),
  view: model => m("div.mt2.mb2", model.label + ": " + model.value)
});
