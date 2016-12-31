import { component as randomGifComponent } from "../random-gif";
import { composeComponents } from "../util";

//FIXME
export function component() {
  return composeComponents({
    randomGifFirst: randomGifComponent(),
    randomGifSecond: randomGifComponent()
  });
}
