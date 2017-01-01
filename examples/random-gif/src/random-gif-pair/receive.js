import { component as randomGif } from "../random-gif";

export function receive(model, proposal, id) {
  randomGif.receive(model.randomGifFirst, proposal, id + "_randomGifFirst");
  randomGif.receive(model.randomGifSecond, proposal, id + "_randomGifSecond");
  return model;
}
