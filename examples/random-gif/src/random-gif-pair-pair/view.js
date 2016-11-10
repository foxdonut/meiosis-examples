import m from "mithril";

export function view(components) {
  return function(state, actions) {
    return m("div", [
      components.randomGifPairOne.view(state.randomGifPairOne, actions.randomGifPairOne),
      components.randomGifPairTwo.view(state.randomGifPairTwo, actions.randomGifPairTwo)
    ]);
  };
}
