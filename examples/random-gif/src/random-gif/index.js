import m from "mithril";
import uuid from "uuid";
import { assoc, merge } from "ramda";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

const editTag = update => evt => update(assoc("tag", evt.target.value));

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

const newGif = (update, events, id, tag) => () => {
  update(model => merge(model, newGifStart()));
  m.request({ url: gif_new_url, data: { api_key, tag }}).
    then(response => update(model => merge(model, newGifSuccess(response.data)))).
    then(() => events.newGifSuccess(id)).
    catch(() => update(model => merge(model, newGifError())));
};

const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);

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

  create: (update, events) => model =>
    m("div", [
      m("span", "Tag:"),
      m("input[type=text]", { value: model.tag, onkeyup: editTag(update) }),
      m("button.btn.btn-xs.btn-default",
        { onclick: newGif(update, events, model.id, model.tag) },
        "Random Gif"),
      m("div", [ m("img", { width: 200, height: 200, src: imgsrc(model) }) ])
    ]),

  events: ["newGifSuccess"]
};
