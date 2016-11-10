import { config as randomGifPairConfig } from "../random-gif-pair";
import { view } from "./view";

export function config() {
  const randomGifPairOne = randomGifPairConfig();
  const randomGifPairTwo = randomGifPairConfig();

  return {
    view: view({ randomGifPairOne, randomGifPairTwo }),
    initialModel: model => {
      model.randomGifPairOne = randomGifPairOne.initialModel({});
      model.randomGifPairTwo = randomGifPairTwo.initialModel({});
      return model;
    },
    actions: propose => ({
      randomGifPairOne: randomGifPairOne.actions(propose),
      randomGifPairTwo: randomGifPairTwo.actions(propose)
    }),
    receive: (model, proposal) => {
      model.randomGifPairOne = randomGifPairOne.receive(model.randomGifPairOne, proposal);
      model.randomGifPairTwo = randomGifPairTwo.receive(model.randomGifPairTwo, proposal);
      return model;
    }
  };
}
