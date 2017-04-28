import m from "mithril";
import stream from "mithril/stream";
import scan from "mithril/stream/scan";
import { applyUpdate, createEvents, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { randomGif } from "./random-gif";
import { increment } from "./increment";

const initialModel = app.model();

const update = stream();
const models = scan(applyUpdate, initialModel, update);

const eventStream = stream();
const events = createEvents({
  eventStream,
  events: {
    randomGif: randomGif.events,
    randomGifCounter1: {
      randomGif: randomGif.events
    },
    randomGifCounter2: {
      randomGif: randomGif.events
    },
    increment: increment.events
  },
  connect: {
    "randomGif.newGifSuccess": ["increment.newGifSuccess"],
    "randomGifCounter2.randomGif.newGifSuccess": ["increment.newGifSuccess"]
  }
});

increment.create(update, events.increment);
const view = app.create(update, events);

const element = document.getElementById("app");
models.map(model => m.render(element, view(model)));

trace({ update, dataStreams: [ models ], otherStreams: [ eventStream ] });
meiosisTracer({ selector: "#tracer" });
