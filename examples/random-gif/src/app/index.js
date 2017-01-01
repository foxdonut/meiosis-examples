import { run } from "meiosis";
//import meiosisTracer from "meiosis-tracer";

import { component } from "./component";

import { component as counter } from "../counter";
import { component as button } from "../button";
import { component as randomGif } from "../random-gif";
import { component as randomGifPair } from "../random-gif-pair";
//import { component as randomGifPairPairComponent } from "../random-gif-pair-pair";
//import { component as randomGifListComponent } from "../random-gif-list";

export function startApp() {
  //const randomGifPair = createComponent(nestComponent("randomGifPair")(randomGifPairComponent()));
  //const randomGifPairPair = createComponent(nestComponent("randomGifPairPair")(randomGifPairPairComponent()));
  //const randomGifList = createComponent(nestComponent("randomGifList")(randomGifListComponent()));

  const receive = (model, proposal) => {
    component.receive(model, proposal);
    button.receive(model.button, proposal);

    ["randomGif1", "randomGif2"].forEach(id => {
      randomGif.receive(model[id], proposal, id);
    });

    randomGifPair.receive(model.randomGifPair, proposal);

    return model;
  };

  //meiosisTracer(createComponent, renderRoot, "#tracer");
  const initial = {
    counter: counter.initialModel({}),
    button: button.initialModel({}),
    randomGif1: randomGif.initialModel({}),
    randomGif2: randomGif.initialModel({}),
    randomGifPair: randomGifPair.initialModel({})
  };

  return run({ initial, scanner: { model: receive } });
}
