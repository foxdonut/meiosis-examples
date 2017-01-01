import { component as randomGifPair } from "../random-gif-pair";

export function receive(model, proposal) {
  randomGifPair.receive(model.randomGifPairOne, proposal, "randomGifPairOne");
  randomGifPair.receive(model.randomGifPairTwo, proposal, "randomGifPairTwo");
  return model;
}
