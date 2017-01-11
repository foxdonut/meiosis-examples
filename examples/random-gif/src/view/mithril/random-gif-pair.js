import m from "mithril";

export const createRandomGifPair = ({ randomGif }) => model =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifFirst)),
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifSecond))
  );
