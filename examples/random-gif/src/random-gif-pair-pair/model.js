import { map } from "meiosis";
import { randomGifPair } from "../random-gif-pair";

export const initialModel = () => ({
  randomGifPairOne: randomGifPair.initialModel(),
  randomGifPairTwo: randomGifPair.initialModel()
});

export const modelChanges = map(modelChange => model => {
  model.randomGifPairOne = modelChange(model.randomGifPairOne);
  model.randomGifPairTwo = modelChange(model.randomGifPairTwo);
  return model;
}, randomGifPair.modelChanges);
