import m from "mithril";

export function view(model) {
  return m("div", "Counter: " + model.value);
}

