import { run } from "meiosis";
//import meiosisTracer from "meiosis-tracer";

import { component } from "./component";

import { component as counterComponent } from "../counter";
import { component as buttonComponent } from "../button";
//import { component as randomGifComponent } from "../random-gif";
//import { component as randomGifPairComponent } from "../random-gif-pair";
//import { component as randomGifPairPairComponent } from "../random-gif-pair-pair";
//import { component as randomGifListComponent } from "../random-gif-list";

export function startApp() {
  //const button = createComponent(nestComponent("button")(buttonComponent()));
  //const counter = createComponent(nestComponent("counter")(counterComponent()));
  //const randomGif1 = createComponent(nestComponent("randomGif1")(randomGifComponent()));
  //const randomGif2 = createComponent(nestComponent("randomGif2")(randomGifComponent()));
  //const randomGifPair = createComponent(nestComponent("randomGifPair")(randomGifPairComponent()));
  //const randomGifPairPair = createComponent(nestComponent("randomGifPairPair")(randomGifPairPairComponent()));
  //const randomGifList = createComponent(nestComponent("randomGifList")(randomGifListComponent()));

  const receive = (model, proposal) => {
    component.receive(model, proposal);
    buttonComponent.receive(model.button, proposal);
    return model;
  };

  //meiosisTracer(createComponent, renderRoot, "#tracer");
  const initial = {
    counter: counterComponent.initialModel({}),
    button: buttonComponent.initialModel({})
  };

  return run({ initial, scanner: { model: receive } });
}
