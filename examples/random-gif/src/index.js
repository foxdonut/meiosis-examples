import m from "mithril";
import stream from "mithril/stream";
import scan from "mithril/stream/scan";
import { applyUpdate, createEvents, trace } from "meiosis";
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

const initialModel = app.model();

const update = stream();
const model = scan(applyUpdate, initialModel, update);

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
model.map(model => m.render(element, view(model)));

trace({ update, dataStreams: [ model ], otherStreams: [ eventStream ] });
meiosisTracer({ selector: "#tracer" });
