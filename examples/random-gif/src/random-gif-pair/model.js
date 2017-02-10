import { map } from "meiosis";
import { randomGif } from "../random-gif";

export const initialModel = () => ({
  randomGifFirst: randomGif.initialModel(),
  randomGifSecond: randomGif.initialModel()
});

export const modelChanges = map(modelChange => model => {
  model.randomGifFirst = modelChange(model.randomGifFirst);
  model.randomGifSecond = modelChange(model.randomGifSecond);
  return model;
}, randomGif.modelChanges);
