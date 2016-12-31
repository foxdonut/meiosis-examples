import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";
import childComponents from "../util/child-components";

export function component(propose) {
  const randomGifComponents = {};

  //FIXME
  return childComponents({
    initialModel,
    actions: actions(propose),
    receive: receive(randomGifComponents),
  }, randomGifComponents);
}
