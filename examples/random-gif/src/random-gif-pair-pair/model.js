import { component as randomGifPair } from "../random-gif-pair";

export function initialModel(model) {
  model.randomGifPairOne = randomGifPair.initialModel({});
  model.randomGifPairTwo = randomGifPair.initialModel({});
  return model;
}
