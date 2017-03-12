import m from "mithril";
import stream from "mithril/stream";
import scan from "mithril/stream/scan";
import { lensProp, over } from "ramda";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { counter } from "./counter";
import { button } from "./button";
import { randomGif } from "./random-gif";
/*
import { randomGifPair } from "./random-gif-pair";
import { randomGifPairPair } from "./random-gif-pair-pair";
import { randomGifList } from "./random-gif-list";
*/

function startApp() {
  const initialModel = {
    counter: counter.model(),
    button: button.model(),
    randomGif1: randomGif.model("randomGif1"), // can either assign an id...
    randomGif2: randomGif.model()/*,             // or use the component's generated id
    randomGifPair: randomGifPair.initialModel(),
    randomGifPairPair: randomGifPairPair.initialModel(),
    randomGifList: randomGifList.initialModel()*/
  };

  const modelChanges = stream();

  const nestModelChange = path => modelChange =>
    modelChanges(model => over(lensProp(path), modelChange, model));

  const actions = {
    counter: modelChanges,
    button: nestModelChange("button"),
    randomGif1: nestModelChange("randomGif1"),
    randomGif2: nestModelChange("randomGif2")/*,
    randomGifPair: nestModelChange("randomGifPair"),
    randomGifPairPair: nestModelChange("randomGifPairPair"),
    randomGifList: nestModelChange("randomGifList")*/
  };

  const updateModel = (model, modelChange) => modelChange(model);

  const model = scan(updateModel, initialModel, modelChanges);

  randomGif.events.newGifSuccess.map(counter.listeners.newGifSuccess(actions.counter));

  const element = document.getElementById("app");
  const render = model => m.render(element, app.view(model, actions));
  model.map(render);

  const streamLibrary = { stream: stream, combine: stream.combine };
  trace({ streamLibrary, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
}

startApp();
