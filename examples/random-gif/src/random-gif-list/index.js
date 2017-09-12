import m from "mithril";
import uuid from "uuid";
import { createRandomGif } from "../random-gif";
import { nestComponent } from "../util/nest";

const randomGifComponentsById = {};

const add = (update, event) => () => update(model => {
  const id = uuid.v1();

  const randomGifComponent = nestComponent(createRandomGif(event, id), update, ["randomGifsById", id]);
  randomGifComponentsById[id] = randomGifComponent;

  model.randomGifIds.push(id);
  model.randomGifsById[id] = randomGifComponent.model();

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
      randomGifComponentsById[id].view(model),
      m("button.f8.link.dim.ph2.br2.ba.red.b--red.bg-white", { onclick: remove(update, id) }, "Remove")
    ]);

  return {
    model: () => ({
      randomGifIds: [],
      randomGifsById: {}
    }),
    view: model => m("div.ba.br2.b--orange.pa2", [
      m("div", [
        m("button.f8.link.dim.ph2.br2.ba.blue.b--blue.bg-white", { onclick: add(update, event) }, "Add")
      ]),
      m("div", model.randomGifIds.map(renderRandomGif(model)))
    ])
  }
};
