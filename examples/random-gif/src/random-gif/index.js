import { initialModel } from "./model";
import { receive } from "./receive";
import { createActions } from "./actions";
import { randomGifIntents } from "./actions";

export const randomGif = {
  initialModel,
  receive,
  createActions,
  intents: randomGifIntents
};

export * from "./constants";
export { randomGifIntents } from "./actions";
