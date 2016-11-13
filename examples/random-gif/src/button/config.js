//import { view } from "./view";
import { view } from "./view.jsx";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";

export function config() {
  return { initialModel, view, actions, receive };
}
