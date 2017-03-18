import { view } from "./view";
import { randomGif } from "../random-gif";

const add = update => () => update(model => {
  const randomGifModel = randomGif.model();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  return model;
});

const remove = (update, id) => () => update(model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
});

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
