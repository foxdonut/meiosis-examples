//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { config as randomGifConfig } from "../random-gif";
import { composeComponents } from "../util";

export function config() {
  return composeComponents({
    randomGifFirst: randomGifConfig(),
    randomGifSecond: randomGifConfig()
  }, view);
}
