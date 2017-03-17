import uuid from "uuid";
import m from "mithril";
import { merge } from "ramda";
import { view } from "./view";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

const editTag = (model, update) => evt => update(merge(model, { tag: evt.target.value }));

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

const newGif = (model, update, events) => () => {
  update(merge(model, newGifStart()));
  m.request({ url: gif_new_url, data: { api_key, tag: model.tag }}).
    then(response => update(newGifSuccess(response.data))).
    then(() => events.newGifSuccess(model.id)).
    catch(() => update(newGifError()));
};

const actions = {
  editTag,
  newGif
};

//FIXME: put this somewhere else
export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
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
  view: view(actions)
};
