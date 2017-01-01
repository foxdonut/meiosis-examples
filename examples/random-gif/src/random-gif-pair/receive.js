import { component as randomGif } from "../random-gif";

export function receive(model, proposal) {
  randomGif.receive(model.randomGifFirst, proposal, "randomGifFirst");
  randomGif.receive(model.randomGifSecond, proposal, "randomGifSecond");
  return model;
}
