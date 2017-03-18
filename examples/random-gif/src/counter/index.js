import m from "mithril";

export const counter = {
  model: () => ({
    value: 0
  }),
  view: model => m("div", "Counter: " + model.value)
};
