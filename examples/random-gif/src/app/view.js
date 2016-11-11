import m from "mithril";

export function view(components) {
  return function(state) {
    return m("div", [
      m("div", "Counter:"),
      components.counter(state.counter),
      m("div", "Button:"),
      components.button(state.button),
      m("div", "Random Gif:"),
      components.randomGif1(state.randomGif1),
      m("div", "Another Random Gif:"),
      components.randomGif2(state.randomGif2),
      m("div", "Random Gif Pair:"),
      components.randomGifPair(state.randomGifPair),
      m("div", "Random Gif Pair Pair:"),
      components.randomGifPairPair(state.randomGifPairPair),
      m("div", "Random Gif List:"),
      components.randomGifList(state.randomGifList)
    ]);
  };
}
