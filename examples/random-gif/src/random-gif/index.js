import uuid from "uuid";
import m from "mithril";
import stream from "mithril/stream";
import { view } from "./view";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

const events = {
  newGifSuccess: stream()
};

const editTag = (update, id) => evt => update(model => {
  if (id === model.id) {
    model.tag = evt.target.value;
  }
  return model;
});

const newGifStart = id => model => {
  if (id === model.id) {
    model.isLoading = true;
    model.isError = false;
  }
  return model;
};

const newGifSuccess = (id, data) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = false;
    model.image_url = data.image_url;
  }
  return model;
};

const newGifError = id => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = true;
  }
  return model;
};

const newGif = (events => (update, model) => () => {
  update(newGifStart(model.id));
  m.request({ url: gif_new_url, data: { api_key, tag: model.tag }}).
    then(response => update(newGifSuccess(model.id, response.data))).
    then(events.newGifSuccess).
    catch(() => update(newGifError(model.id)));
})(events);

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
  view: view(actions),
  events
};
