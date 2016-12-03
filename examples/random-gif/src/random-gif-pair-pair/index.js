/*mithril*/ import { view } from "./view";
//react import { view } from "./view.jsx";
import { component as randomGifPairComponent } from "../random-gif-pair";
import { composeComponents } from "../util";

export function component() {
  return composeComponents({
    randomGifPairOne: randomGifPairComponent(),
    randomGifPairTwo: randomGifPairComponent()
  }, view);
}
