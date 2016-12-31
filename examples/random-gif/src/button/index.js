import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";

export function component(propose) {
  return { initialModel, actions: actions(propose), receive };
}
