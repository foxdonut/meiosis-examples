import m from "mithril";
import { mergeIntoOne } from "../util";
import uuid from "uuid";
import { actions } from "./actions";

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

export const initialModel = id => {
  id = id || uuid.v1();

  return {
    id,
    isLoading: false,
    isError: false,
    tag: "",
    image_url: ""
  };
};

const editTag = actions.editTag.map(({ id, tag }) => model => {
  if (id === model.id) {
    model.tag = tag;
  }
  return model;
});

actions.newGif.map(({ id, tag }) => {
  actions.newGifStart({ id, tag });
  m.request({ url: gif_new_url, data: { api_key, tag }}).
    then(response => actions.newGifSuccess({ id, data: response.data })).
    catch(error => actions.newGifError({ id, error }));
});

const newGifStart = actions.newGifStart.map(({ id }) => model => {
  if (id === model.id) {
    model.isLoading = true;
    model.isError = false;
  }
  return model;
});

const newGifSuccess = actions.newGifSuccess.map(({ id, data }) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = false;
    model.image_url = data.image_url;
  }
  return model;
});

const newGifError = actions.newGifError.map(({ id }) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = true;
  }
  return model;
});

export const modelChanges = mergeIntoOne([
  editTag,
  newGifStart,
  newGifSuccess,
  newGifError
]);
