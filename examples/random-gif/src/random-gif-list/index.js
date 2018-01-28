import m from "mithril";
import uuid from "uuid";
import { any, prop, values } from "ramda";
import { randomGif } from "../random-gif";
import { nestUpdate } from "../util/nest";

const add = update => () => update(model => {
  const id = uuid.v1();

  model.randomGifIds.push(id);
  model.randomGifsById[id] = randomGif.model(id);

  return model;
});

const remove = (update, id) => () => update(model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
});

const reloadAll = ({update, event, model}) => () =>
  values(model.randomGifsById).forEach(
    model => randomGif.reload({update: nestUpdate(update, ["randomGifsById", model.id]), event, model})
  );

const buttonStyle = "button.f8.link.dim.ph2.br2.ba.blue.b--blue.bg-white";

export const createRandomGifList = event => update => {
  const renderRandomGif = model => id =>
    m("div.dib", { key: id }, [
      randomGif.view({
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
      m("div", "Contains one or more gifs: ", String(any(prop("image_url"), values(model.randomGifsById)))),
      m("div", [
        m(buttonStyle, { onclick: add(update) }, "Add"),
        m(buttonStyle + ".ml1", { onclick: reloadAll({update, event, model}) }, "Reload All")
      ]),
      m("div", model.randomGifIds.map(renderRandomGif(model)))
    ])
  }
};
