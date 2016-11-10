import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-mithril";
import meiosisTracer from "meiosis-tracer";

import nestComponent from "../util/nest-component";

import { config } from "./config";

import { config as buttonConfig } from "../button";
import { config as counterConfig } from "../counter";
import { config as randomGifConfig } from "../random-gif";

export function startApp() {
  const button = createComponent(nestComponent("button")(buttonConfig()));
  const counter = createComponent(nestComponent("counter")(counterConfig()));
  const randomGif = createComponent(nestComponent("randomGif")(randomGifConfig()));

  const renderRoot = run({
    renderer: renderer().intoId(document, "app"),
    rootComponent: createComponent(config({ button, counter, randomGif }))
  });

  meiosisTracer(createComponent, renderRoot, "#tracer");
}

