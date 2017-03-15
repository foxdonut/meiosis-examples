import { view } from "./view";
import { randomGif } from "../random-gif";

const add = (model, update) => () => {
  const randomGifModel = randomGif.model();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  update(model);
};

const remove = (model, update, id) => () => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  update(model);
};

/*
const update = randomGif.modelChanges.map(modelChange => model => {
  model.randomGifIds.forEach(id => modelChange(model.randomGifsById[id]));
  return model;
});
*/

const actions = {
  add,
  remove
};

export const randomGifList = {
  model: () => ({
    randomGifIds: [],
    randomGifsById: {}
  }),
  view: view(actions)
};
