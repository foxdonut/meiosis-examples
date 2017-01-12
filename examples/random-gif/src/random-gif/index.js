import { initialModel } from "./model";
import { receive } from "./receive";
import { createActions, intents } from "./actions";

export const randomGif = {
  initialModel,
  receive,
  createActions,
  intents
};

export * from "./constants";
