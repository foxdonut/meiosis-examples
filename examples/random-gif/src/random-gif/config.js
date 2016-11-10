import { view } from "./view";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";
import ajax from "../util/ajax-axios";

export function config() {
  return { view, initialModel, actions: actions(ajax), receive };
}
