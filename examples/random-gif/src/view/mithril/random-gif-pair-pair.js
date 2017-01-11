import m from "mithril";

export const createRandomGifPairPair = ({ randomGifPair }) => model =>
  m("div",
    randomGifPair(model.randomGifPairOne),
    randomGifPair(model.randomGifPairTwo)
  );
