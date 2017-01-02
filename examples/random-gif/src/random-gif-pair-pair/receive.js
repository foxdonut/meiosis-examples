import { component as randomGifPair } from "../random-gif-pair";

export function receive(model, proposal) {
  model.randomGifPairOne = randomGifPair.receive(model.randomGifPairOne, proposal);
  model.randomGifPairTwo = randomGifPair.receive(model.randomGifPairTwo, proposal);
  return model;
}
