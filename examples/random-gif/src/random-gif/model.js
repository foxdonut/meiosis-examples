import { map, on, stream } from "meiosis";
import { ajax, mergeAll } from "../util";
import uuid from "uuid";
import { randomGifActions } from "../view/events/random-gif";

const GIF_NEW_URL = "https://api.giphy.com/v1/gifs/random";
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

const editTag = map(({ id, tag }) => model => {
  if (id === model.id) {
    model.tag = tag;
  }
  return model;
}, randomGifActions.editTag);

const newGifStartAction = stream();
export const newGifSuccessAction = stream();
const newGifErrorAction = stream();

on(({ id, tag }) => {
  newGifStartAction({ id, tag });
  ajax.getJSON({ url: GIF_NEW_URL, params: { api_key, tag }}).
    then(response => newGifSuccessAction({ id, data: response.data })).
    catch(error => newGifErrorAction({ id, error }));
}, randomGifActions.newGif);

const newGifStart = map(({ id }) => model => {
  if (id === model.id) {
    model.isLoading = true;
    model.isError = false;
  }
  return model;
}, newGifStartAction);

const newGifSuccess = map(({ id, data }) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = false;
    model.image_url = data.image_url;
  }
  return model;
}, newGifSuccessAction);

const newGifError = map(({ id }) => model => {
  if (id === model.id) {
    model.isLoading = false;
    model.isError = true;
  }
  return model;
}, newGifErrorAction);

export const modelChanges = mergeAll([
  editTag,
  newGifStart,
  newGifSuccess,
  newGifError
]);
