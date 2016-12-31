import { initialModel } from "./model";
import { actions } from "./actions";
import { receive } from "./receive";
import ajax from "../util/ajax-axios";
import uuid from "node-uuid";

export function component(propose, componentId) {
  const id = componentId || uuid.v1();
  return { initialModel, actions: actions(propose, id, ajax), receive: receive(id) };
}

export * from "./constants";
