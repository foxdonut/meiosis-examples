/*mithril*/ import { view } from "./view";
//react import { view } from "./view.jsx";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";
import childComponents from "../util/child-components";

export function component() {
  const randomGifComponents = {};

  return childComponents({
    initialModel,
    view: view({ randomGifComponents }),
    actions,
    receive: receive(randomGifComponents),
  }, randomGifComponents);
}
