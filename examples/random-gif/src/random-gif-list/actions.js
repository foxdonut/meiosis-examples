import { map, stream } from "meiosis";
import * as C from "./constants";

export const randomGifListIntents = {
  add: stream(),
  remove: stream()
};

export const createActions = ({ propose }) => {
  map(() => propose({ type: C.GIF_LIST_ADD }), randomGifListIntents.add);
  map(id => propose({ type: C.GIF_LIST_REMOVE, id }), randomGifListIntents.remove);
};
