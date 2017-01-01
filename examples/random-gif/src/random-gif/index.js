import { ajax } from "../util";
import { createActions } from "./actions";
import { initialModel } from "./model";
import { receive } from "./receive";

export const component = {
  initialModel,
  receive
};

export const actions = createActions(ajax);

export * from "./constants";
