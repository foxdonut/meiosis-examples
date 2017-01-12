import { initialModel } from "./model";
import { receive } from "./receive";
import { createActions } from "./actions";

export const randomGif = {
  initialModel,
  receive,
  createActions
};

export * from "./constants";
export { randomGifIntents } from "./actions";
