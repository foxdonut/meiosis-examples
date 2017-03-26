import m from "mithril";
import stream from "mithril/stream";
import scan from "mithril/stream/scan";
import { createEvents, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { counter } from "./counter";
import { button } from "./button";
import { randomGif } from "./random-gif";
import { randomGifPair } from "./random-gif-pair";
import { randomGifPairPair } from "./random-gif-pair-pair";
import { randomGifList } from "./random-gif-list";
import { randomGifCounter } from "./random-gif-counter";
import { increment } from "./increment";

function startApp() {
  const initialModel = {
    counter: counter.model(),
    button: button.model(),
    randomGif1: randomGif.model("randomGif1"), // can either assign an id...
    randomGif2: randomGif.model(),             // or use the component's generated id
    randomGifPair: randomGifPair.model(),
    randomGifPairPair: randomGifPairPair.model(),
    randomGifList: randomGifList.model(),
    randomGifCounter1: randomGifCounter.model(),
    randomGifCounter2: randomGifCounter.model()
  };

  const update = stream();
  const applyModelChange = (model, modelChange) => modelChange(model);
  const model = scan(applyModelChange, initialModel, update);

  const eventStream = stream();
  const events = createEvents(eventStream, {
    randomGif: randomGif.events,
    randomGifCounter1: {
      randomGif: randomGif.events
    },
    randomGifCounter2: {
      randomGif: randomGif.events
    }
  });

  increment.create(update, events.randomGif);
  const view = app.create(update, events);

  const element = document.getElementById("app");
  const render = model => m.render(element, view(model));
  model.map(render);

  const streamLibrary = { stream: stream, combine: stream.combine };
  trace({ streamLibrary, modelChanges: update, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
}

startApp();
