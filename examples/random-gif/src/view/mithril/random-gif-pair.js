import m from "mithril";

export const view = actions => model =>
  m("div", [
    m("div", { style: "display: inline-block" },
      components.randomGifFirst.view(model.randomGifFirst, actions.randomGifFirst)),
    m("div", { style: "display: inline-block" },
      components.randomGifSecond.view(model.randomGifSecond, actions.randomGifSecond))
  ]);
