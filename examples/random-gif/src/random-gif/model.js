import m from "mithril";
import stream from "mithril/stream";
import { mergeIntoOne } from "../util";
import uuid from "uuid";
import { randomGifActions } from "./actions";

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

const editTag = randomGifActions.editTag.map(({ id, tag }) => model => {
  if (id === model.id) {
    model.tag = tag;
  }
  return model;
});

const newGifStartAction = stream();
export const newGifSuccessAction = stream();
const newGifErrorAction = stream();

randomGifActions.newGif.map(({ id, tag }) => {
  newGifStartAction({ id, tag });
  m.request({ url: gif_new_url, data: { api_key, tag }}).
    then(response => newGifSuccessAction({ id, data: response.data })).
    catch(error => newGifErrorAction({ id, error }));
});

const newGifStart = newGifStartAction.map(({ id }) => model => {
  if (id === model.id) {
    model.isLoading = true;
    model.isError = false;
  }
  return model;
});

const newGifSuccess = newGifSuccessAction.map(({ id, data }) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = false;
    model.image_url = data.image_url;
  }
  return model;
});

const newGifError = newGifErrorAction.map(({ id }) => model => {
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
