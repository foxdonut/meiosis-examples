import { createComponent, run } from "meiosis";
import { renderer } from "meiosis-mithril";
import { initialModel } from "./model";
import { config } from "./config";

import { config as buttonConfig } from "../button";
import { config as counterConfig } from "../counter";
import { config as randomGifConfig } from "../random-gif";

export function startApp() {
  const button = createComponent(buttonConfig());
  const counter = createComponent(counterConfig());
  const randomGif = createComponent(randomGifConfig());

  run({
    renderer: renderer().intoId(document, "app"),
    initialModel,
    rootComponent: createComponent(config({ button, counter, randomGif }))
  });
}

