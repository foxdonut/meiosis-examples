import { randomGif } from "../random-gif";

export function receive(model, proposal) {
  model.randomGifFirst = randomGif.receive(model.randomGifFirst, proposal);
  model.randomGifSecond = randomGif.receive(model.randomGifSecond, proposal);
  return model;
}
