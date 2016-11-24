//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";

export function component() {
  const randomGifComponents = {};

  return {
    view: view({ randomGifComponents }),
    initialModel,
    actions,
    receive: receive(randomGifComponents)
  };
}
