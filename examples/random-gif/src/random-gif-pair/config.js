import { config as randomGifConfig } from "../random-gif";
import { view } from "./view";
import { composeComponents } from "../util";

export function config() {
  return composeComponents({
    randomGifFirst: randomGifConfig(),
    randomGifSecond: randomGifConfig()
  }, view);
}
