import { initialModel } from "./model";
import { view } from "./view";
import { actions } from "./actions";
import { receive } from "./receive";

export function config() {
  return { initialModel, view, actions, receive };
}
