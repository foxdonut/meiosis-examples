import { component as randomGif } from "../random-gif";

export function initialModel(model) {
  model.randomGifFirst = randomGif.initialModel({});
  model.randomGifSecond = randomGif.initialModel({});
  return model;
}
