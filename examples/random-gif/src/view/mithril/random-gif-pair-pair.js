import m from "mithril";

export const view = actions => model =>
  m("div", [
    components.randomGifPairOne.view(model.randomGifPairOne, actions.randomGifPairOne),
    components.randomGifPairTwo.view(model.randomGifPairTwo, actions.randomGifPairTwo)
  ]);
