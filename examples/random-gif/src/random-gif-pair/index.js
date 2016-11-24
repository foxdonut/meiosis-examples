//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { component as randomGifComponent } from "../random-gif";
import { composeComponents } from "../util";

export function component() {
  return composeComponents({
    randomGifFirst: randomGifComponent(),
    randomGifSecond: randomGifComponent()
  }, view);
}
