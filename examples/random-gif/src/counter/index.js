import m from "mithril";

export const counter = {
  model: () => ({
    value: 0
  }),
  create: () => model => m("div", "Counter: " + model.value)
};
