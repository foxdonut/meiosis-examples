import m from "mithril";

export function view(components) {
  return function(state) {
    return m("div", [
      components.counter(state.counter),
      components.button(state.button),
      components.randomGif(state.randomGif)
    ]);
  };
}
