import m from "mithril";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { mergeIntoOne, nest, scan, streamLibrary } from "../util";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";

export function startApp(view) {
  const initialModel = {
    counter: counter.initialModel(),
    button: button.initialModel(),
    randomGif1: randomGif.initialModel("randomGif1"), // can either assign an id...
    randomGif2: randomGif.initialModel(),             // or use the component's generated id
    randomGifPair: randomGifPair.initialModel(),
    randomGifPairPair: randomGifPairPair.initialModel(),
    randomGifList: randomGifList.initialModel()
  };

  const modelChanges = mergeIntoOne([
    counter.modelChanges,
    button.modelChanges.map(nest("button")),
    randomGif.modelChanges.map(nest("randomGif1")),
    randomGif.modelChanges.map(nest("randomGif2")),
    randomGifPair.modelChanges.map(nest("randomGifPair")),
    randomGifPairPair.modelChanges.map(nest("randomGifPairPair")),
    randomGifList.modelChanges.map(nest("randomGifList"))
  ]);

  const model = scan((model, change) => change(model), initialModel, modelChanges);

  const element = document.getElementById("app");
  const render = model => m.render(element, view(model));
  model.map(render);
  trace({ streamLibrary, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
}
