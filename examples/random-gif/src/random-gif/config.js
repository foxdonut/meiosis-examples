//import { view } from "./view";
import { view } from "./view.jsx";
import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";
import ajax from "../util/ajax-axios";
import uuid from "node-uuid";

export function config(componentId) {
  const id = componentId || uuid.v1();
  return { view, initialModel, actions: actions(id, ajax), receive: receive(id) };
}
