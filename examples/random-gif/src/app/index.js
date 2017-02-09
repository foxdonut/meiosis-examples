import { map, merge, run } from "meiosis";
import { ajax } from "../util";

import { app } from "./app";

import { counter } from "../counter";
import { button } from "../button";
import { buttonActions } from "../view/common/button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";
import { randomGifIntents } from "../view/common/random-gif";

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

/*
  const receive = (model, proposal) => {
    model = app.receive(model, proposal);
    model.button = button.receive(model.button, proposal);
    model.randomGif1 = randomGif.receive(model.randomGif1, proposal);
    model.randomGif2 = randomGif.receive(model.randomGif2, proposal);
    model.randomGifPair = randomGifPair.receive(model.randomGifPair, proposal);
    model.randomGifPairPair = randomGifPairPair.receive(model.randomGifPairPair, proposal);
    model.randomGifList = randomGifList.receive(model.randomGifList, proposal);

    return model;
  };

  button.createActions({ propose });
  randomGif.createActions({ propose, ajax, randomGifIntents });
  randomGifList.createActions({ propose });
*/
  // util
  const nest = (path, fn) => model => {
    model[path] = fn(model[path]);
    return model;
  };

  const modelChanges = merge(
    map(() => nest("button", button.modelChange), buttonActions.toggle),
    map(modelChange => nest("randomGifList", modelChange), randomGifList.modelChanges)
  );

  return run({ initialModel, modelChanges });
}
