import m from "mithril";

export function view(components) {
  return function(state, actions) {
    return m("div", [
      m("div", { style: "display: inline-block" },
        components.randomGifFirst.view(state.randomGifFirst, actions.randomGifFirst)),
      m("div", { style: "display: inline-block" },
        components.randomGifSecond.view(state.randomGifSecond, actions.randomGifSecond))
    ]);
  };
}
