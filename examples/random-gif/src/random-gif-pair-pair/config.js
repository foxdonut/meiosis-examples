import { config as randomGifPairConfig } from "../random-gif-pair";
import { view } from "./view";
import { composeComponents } from "../util";

export function config() {
  return composeComponents({
    randomGifPairOne: randomGifPairConfig(),
    randomGifPairTwo: randomGifPairConfig()
  }, view);
}
