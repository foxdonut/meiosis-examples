import m from "mithril";
import uuid from "uuid";
import { model as randomGifModel, viewRandomGif } from "../random-gif";
import { nestUpdate } from "../util/nest";

const add = update => () => update(model => {
  const id = uuid.v1();

  model.randomGifIds.push(id);
  model.randomGifsById[id] = randomGifModel(id);

  return model;
});

const remove = (update, id) => () => update(model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
});

export const createRandomGifList = event => update => {
  const renderRandomGif = model => id =>
    m("div.dib", { key: id }, [
      viewRandomGif({
        event,
        update: nestUpdate(update, ["randomGifsById", id])
      })(model.randomGifsById[id]),
      m("button.f8.link.dim.ph2.br2.ba.red.b--red.bg-white", { onclick: remove(update, id) }, "Remove")
    ]);

  return {
    model: () => ({
      randomGifIds: [],
      randomGifsById: {}
    }),
    view: model => m("div.ba.br2.b--orange.pa2", [
      m("div", [
        m("button.f8.link.dim.ph2.br2.ba.blue.b--blue.bg-white", { onclick: add(update) }, "Add")
      ]),
      m("div", model.randomGifIds.map(renderRandomGif(model)))
    ])
  }
};
