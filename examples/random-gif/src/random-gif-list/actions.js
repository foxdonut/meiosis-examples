import * as C from "./constants";

export const actions = propose => ({
  addToRandomGifList: () => propose({ type: C.GIF_LIST_ADD }),
  removeFromRandomGifList: id => propose({ type: C.GIF_LIST_REMOVE, id }),
  propose
});
