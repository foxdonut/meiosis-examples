import m from "mithril";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { mergeIntoOne, nest, scan, streamLibrary } from "./util";
import { counter } from "./counter";
import { button } from "./button";
import { randomGif } from "./random-gif";
import { randomGifPair } from "./random-gif-pair";
import { randomGifPairPair } from "./random-gif-pair-pair";
import { randomGifList } from "./random-gif-list";

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
    nest("button", button.modelChanges),
    nest("randomGif1", randomGif.modelChanges),
    nest("randomGif2", randomGif.modelChanges),
    nest("randomGifPair", randomGifPair.modelChanges),
    nest("randomGifPairPair", randomGifPairPair.modelChanges),
    nest("randomGifList", randomGifList.modelChanges)
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);

  const element = document.getElementById("app");
  const render = model => m.render(element, view(model));
  model.map(render);
  trace({ streamLibrary, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
}
