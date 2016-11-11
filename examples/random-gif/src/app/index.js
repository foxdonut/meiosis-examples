import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-mithril";
import meiosisTracer from "meiosis-tracer";

import { nestComponent } from "../util";

import { config } from "./config";

import { config as buttonConfig } from "../button";
import { config as counterConfig } from "../counter";
import { config as randomGifConfig } from "../random-gif";
import { config as randomGifPairConfig } from "../random-gif-pair";
import { config as randomGifPairPairConfig } from "../random-gif-pair-pair";
import { config as randomGifListConfig } from "../random-gif-list";

export function startApp() {
  const button = createComponent(nestComponent("button")(buttonConfig()));
  const counter = createComponent(nestComponent("counter")(counterConfig()));
  const randomGif1 = createComponent(nestComponent("randomGif1")(randomGifConfig()));
  const randomGif2 = createComponent(nestComponent("randomGif2")(randomGifConfig()));
  const randomGifPair = createComponent(nestComponent("randomGifPair")(randomGifPairConfig()));
  const randomGifPairPair = createComponent(nestComponent("randomGifPairPair")(randomGifPairPairConfig()));
  const randomGifList = createComponent(nestComponent("randomGifList")(randomGifListConfig()));

  const renderRoot = run({
    renderer: renderer().intoId(document, "app"),
    rootComponent: createComponent(config({ button, counter, randomGif1, randomGif2, randomGifPair,
      randomGifPairPair, randomGifList }))
  });

  meiosisTracer(createComponent, renderRoot, "#tracer");
}
