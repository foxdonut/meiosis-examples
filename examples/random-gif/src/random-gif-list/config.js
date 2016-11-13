//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";

export function config() {
  const randomGifConfigs = {};

  return {
    view: view({ randomGifConfigs }),
    initialModel,
    actions,
    receive: receive(randomGifConfigs)
  };
}
