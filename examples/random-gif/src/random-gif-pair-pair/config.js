//import { view } from "./view";
import { view } from "./view.jsx";
import { config as randomGifPairConfig } from "../random-gif-pair";
import { composeComponents } from "../util";

export function config() {
  return composeComponents({
    randomGifPairOne: randomGifPairConfig(),
    randomGifPairTwo: randomGifPairConfig()
  }, view);
}
