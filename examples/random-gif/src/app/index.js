import { createComponent, run } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { nestComponent } from "../util";

import { component } from "./component";

import { component as buttonComponent } from "../button";
import { component as counterComponent } from "../counter";
import { component as randomGifComponent } from "../random-gif";
import { component as randomGifPairComponent } from "../random-gif-pair";
import { component as randomGifPairPairComponent } from "../random-gif-pair-pair";
import { component as randomGifListComponent } from "../random-gif-list";

export function startApp(renderer) {
  const button = createComponent(nestComponent("button")(buttonComponent()));
  const counter = createComponent(nestComponent("counter")(counterComponent()));
  const randomGif1 = createComponent(nestComponent("randomGif1")(randomGifComponent()));
  const randomGif2 = createComponent(nestComponent("randomGif2")(randomGifComponent()));
  const randomGifPair = createComponent(nestComponent("randomGifPair")(randomGifPairComponent()));
  const randomGifPairPair = createComponent(nestComponent("randomGifPairPair")(randomGifPairPairComponent()));
  const randomGifList = createComponent(nestComponent("randomGifList")(randomGifListComponent()));

  const renderRoot = run({
    renderer: renderer().intoId(document, "app"),
    rootComponent: createComponent(component({ button, counter, randomGif1, randomGif2, randomGifPair,
      randomGifPairPair, randomGifList }))
  });

  meiosisTracer(createComponent, renderRoot, "#tracer");
}
