import * as m from "mithril";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

export const editTag = (update, id) => evt => update(model => {
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

export const newGif = (update, events, model) => () => {
  update(newGifStart(model.id));
  m.request({ url: gif_new_url, data: { api_key, tag: model.tag }}).
    then(response => update(newGifSuccess(model.id, response.data))).
    then(events.newGifSuccess).
    catch(() => update(newGifError(model.id)));
};
