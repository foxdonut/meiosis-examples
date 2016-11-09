import m from "mithril";

export function view(state) {
  return m("div", "Counter: " + state.value);
}

