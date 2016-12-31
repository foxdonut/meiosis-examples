import { component as randomGifPairComponent } from "../random-gif-pair";
import { composeComponents } from "../util";

//FIXME
export function component() {
  return composeComponents({
    randomGifPairOne: randomGifPairComponent(),
    randomGifPairTwo: randomGifPairComponent()
  });
}
