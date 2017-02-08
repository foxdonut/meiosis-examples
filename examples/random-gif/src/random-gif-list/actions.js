import { map, on, stream } from "meiosis";
import * as C from "./constants";
import { randomGif } from "../random-gif";

export const intents = {
  add: stream(),
  remove: stream()
};

export const createActions = ({ propose }) => {
  on(() => propose({ type: C.GIF_LIST_ADD }), intents.add);
  on(id => propose({ type: C.GIF_LIST_REMOVE, id }), intents.remove);
};

export const add = map(() => model => {
  const randomGifModel = randomGif.initialModel();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  return model;
}, intents.add);

export const remove = map(id => model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
}, intents.remove);

//model.randomGifIds.forEach(id => randomGif.receive(model.randomGifsById[id], proposal));
