import { map, merge } from "meiosis";
import { randomGif } from "../random-gif";
import { randomGifListActions } from "../view/common/random-gif-list";

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

//model.randomGifIds.forEach(id => randomGif.receive(model.randomGifsById[id], proposal));

export const modelChanges = merge(add, remove);