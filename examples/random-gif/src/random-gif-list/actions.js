import { randomGif } from "../random-gif";

export const add = update => () => update(model => {
  const randomGifModel = randomGif.initialModel();
  model.randomGifIds.push(randomGifModel.id);
  model.randomGifsById[randomGifModel.id] = randomGifModel;
  return model;
});

export const remove = (update, id) => () => update(model => {
  delete model.randomGifsById[id];
  model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  return model;
});

/*
const update = randomGif.modelChanges.map(modelChange => model => {
  model.randomGifIds.forEach(id => modelChange(model.randomGifsById[id]));
  return model;
});
*/
