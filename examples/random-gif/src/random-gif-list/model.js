import { map, mergeAll } from "meiosis";
import { randomGif } from "../random-gif";
import { randomGifListActions } from "../view/events/random-gif-list";

export const initialModel = () => ({
  randomGifIds: [],
  randomGifsById: {}
});

const add = map(() => model => {
  const randomGifModel = randomGif.initialModel();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  return model;
}, randomGifListActions.add);

const remove = map(id => model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
}, randomGifListActions.remove);

const update = map(modelChange => model => {
  model.randomGifIds.forEach(id => modelChange(model.randomGifsById[id]));
  return model;
}, randomGif.modelChanges);

export const modelChanges = mergeAll([add, remove, update]);
