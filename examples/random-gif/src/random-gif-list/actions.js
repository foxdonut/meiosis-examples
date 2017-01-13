import { on, stream } from "meiosis";
import * as C from "./constants";

export const intents = {
  add: stream(),
  remove: stream()
};

export const createActions = ({ propose }) => {
  on(() => propose({ type: C.GIF_LIST_ADD }), intents.add);
  on(id => propose({ type: C.GIF_LIST_REMOVE, id }), intents.remove);
};
