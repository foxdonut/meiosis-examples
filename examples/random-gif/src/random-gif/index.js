import m from "mithril";
import uuid from "uuid";
import { assoc, merge } from "ramda";

import { Case } from "../util";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

const newGifStart = () => ({
  isLoading: true,
  isError: false
});

const newGifSuccess = data => ({
  isLoading: false,
  isError: false,
  image_url: data.image_url
});

const newGifError = () => ({
  isLoading: false,
  isError: true
});

const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);

export const randomGifEvent = Case.cases([
  "newGifSuccess"
]);

const editTag = update => evt => update(assoc("tag", evt.target.value));

const newGif = ({update, event, id, tag}) => () => {
  update(model => merge(model, newGifStart()));
  m.request({ url: gif_new_url, data: { api_key, tag }}).
    then(response => update(model => merge(model, newGifSuccess(response.data)))).
    then(() => event(Case.of(randomGifEvent.newGifSuccess, id))).
    catch(() => update(model => merge(model, newGifError())));
};

export const randomGif = {
  model: id => {
    id = id || uuid.v1();

    return {
      id,
      isLoading: false,
      isError: false,
      tag: "",
      image_url: ""
    };
  },

  reload: ({update, event, model}) =>
    newGif({update, event, id: model.id, tag: model.tag})(),

  view: ({event, update}) => model =>
    m("div.ma2.ba.b--green.pa2", [
      m("span.mr2", "Tag:"),
      m("input.mr2[type=text]", { value: model.tag, onkeyup: editTag(update) }),
      m("button.db.mt2.white.bg-blue.b--blue.ba.br2.pv1.ph2.link.w4",
        { onclick: newGif({update, event, id: model.id, tag: model.tag}) },
        "Random Gif"),
      m("div.mt2", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
    ])
};

export const createRandomGif = (event, id) => update => {
  return {
    model: () => randomGif.model(id),

    view: randomGif.view({event, update})
  };
};
