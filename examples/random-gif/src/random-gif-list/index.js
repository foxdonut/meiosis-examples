import m from "mithril";
import { lensPath, over } from "ramda";
import { randomGif } from "../random-gif";

const add = update => () => update(model => {
  const randomGifModel = randomGif.model();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  return model;
});

const remove = (update, id) => () => update(model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
});

export const randomGifList = {
  model: () => ({
    randomGifIds: [],
    randomGifsById: {}
  }),
  create: (update, events) => {
    const renderRandomGif = model => id =>
      m("div", { key: id, style: "display: inline-block" }, [
        randomGif.create(
          modelChange => update(over(lensPath(["randomGifsById", id]), modelChange)),
          events
        )(model.randomGifsById[id]),
        m("button.btn.btn-default.btn-xs", { onclick: remove(update, id) }, "Remove")
      ]);

    return model => m("div", [
      m("div", [
        m("button.btn.btn-default.btn-xs", { onclick: add(update) }, "Add")
      ]),
      m("div", model.randomGifIds.map(renderRandomGif(model)))
    ]);
  }
};
