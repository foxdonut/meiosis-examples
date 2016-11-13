import { initialModel } from "./model";
import { view } from "./view";
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
