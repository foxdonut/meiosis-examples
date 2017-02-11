import { map, mergeAll, run } from "meiosis";
import { nest } from "../util";

import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";

export function startApp() {
  const initialModel = {
    counter: counter.initialModel(),
    button: button.initialModel(),
    randomGif1: randomGif.initialModel("randomGif1"), // can either assign an id...
    randomGif2: randomGif.initialModel(),             // or use the component's generated id
    randomGifPair: randomGifPair.initialModel(),
    randomGifPairPair: randomGifPairPair.initialModel(),
    randomGifList: randomGifList.initialModel()
  };

  const counterModelChanges = map(() => model => {
    const increment = model.counter.value >= 10 && model.button.active ? 2 : 1;
    model.counter.value = model.counter.value + increment;
    return model;
  }, randomGif.newGifSuccessAction);

  const modelChanges = mergeAll([
    counterModelChanges,
    map(nest("button"), button.modelChanges),
    map(nest("randomGif1"), randomGif.modelChanges),
    map(nest("randomGif2"), randomGif.modelChanges),
    map(nest("randomGifPair"), randomGifPair.modelChanges),
    map(nest("randomGifPairPair"), randomGifPairPair.modelChanges),
    map(nest("randomGifList"), randomGifList.modelChanges)
  ]);

  return run({ initialModel, modelChanges });
}
