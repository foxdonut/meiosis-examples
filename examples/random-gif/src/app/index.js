import { run } from "meiosis";

import { component } from "./component";

import { component as counter } from "../counter";
import { component as button } from "../button";
import { component as randomGif } from "../random-gif";
import { component as randomGifPair } from "../random-gif-pair";
import { component as randomGifPairPair } from "../random-gif-pair-pair";
import { component as randomGifList } from "../random-gif-list";

export function startApp() {
  const receive = (model, proposal) => {
    model = component.receive(model, proposal);
    model.button = button.receive(model.button, proposal);
    model.randomGif1 = randomGif.receive(model.randomGif1, proposal);
    model.randomGif2 = randomGif.receive(model.randomGif2, proposal);
    model.randomGifPair = randomGifPair.receive(model.randomGifPair, proposal);
    model.randomGifPairPair = randomGifPairPair.receive(model.randomGifPairPair, proposal);
    model.randomGifList = randomGifList.receive(model.randomGifList, proposal);
    return model;
  };

  const initial = {
    counter: counter.initialModel(),
    button: button.initialModel(),
    randomGif1: randomGif.initialModel("randomGif1"), // can either assign an id...
    randomGif2: randomGif.initialModel(),             // or use the component's generated id
    randomGifPair: randomGifPair.initialModel(),
    randomGifPairPair: randomGifPairPair.initialModel(),
    randomGifList: randomGifList.initialModel()
  };

  return run({ initial, scanner: { model: receive } });
}
