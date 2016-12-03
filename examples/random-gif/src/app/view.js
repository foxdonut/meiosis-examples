import m from "mithril";

export function view(components) {
  return function(model) {
    return m("div", [
      m("div", "Counter:"),
      components.counter(model),
      m("div", "Button:"),
      components.button(model),
      m("div", "Random Gif:"),
      components.randomGif1(model),
      m("div", "Another Random Gif:"),
      components.randomGif2(model),
      m("div", "Random Gif Pair:"),
      components.randomGifPair(model),
      m("div", "Random Gif Pair Pair:"),
      components.randomGifPairPair(model),
      m("div", "Random Gif List:"),
      components.randomGifList(model)
    ]);
  };
}
