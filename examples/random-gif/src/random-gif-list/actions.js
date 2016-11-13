import * as C from "./constants";

export function actions(propose) {
  return {
    addToRandomGifList: () => propose({ type: C.GIF_LIST_ADD }),
    removeFromRandomGifList: id => propose({ type: C.GIF_LIST_REMOVE, id }),
    propose
  };
}
