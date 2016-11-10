import { config as randomGifConfig } from "../random-gif";
import { view } from "./view";

export function config() {
  const randomGifFirst = randomGifConfig();
  const randomGifSecond = randomGifConfig();

  return {
    view: view({ randomGifFirst, randomGifSecond }),
    initialModel: model => {
      model.randomGifFirst = randomGifFirst.initialModel({});
      model.randomGifSecond = randomGifSecond.initialModel({});
      return model;
    },
    actions: propose => ({
      randomGifFirst: randomGifFirst.actions(propose),
      randomGifSecond: randomGifSecond.actions(propose)
    }),
    receive: (model, proposal) => {
      model.randomGifFirst = randomGifFirst.receive(model.randomGifFirst, proposal);
      model.randomGifSecond = randomGifSecond.receive(model.randomGifSecond, proposal);
      return model;
    }
  };
}
