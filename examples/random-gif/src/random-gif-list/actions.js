import { propose } from "meiosis";
import * as C from "./constants";

export const actions = {
  addToRandomGifList: () => propose({ type: C.GIF_LIST_ADD }),
  removeFromRandomGifList: id => propose({ type: C.GIF_LIST_REMOVE, id })
};

export const handlers = {
  onAdd: evt => {
    evt.preventDefault();
    actions.addToRandomGifList();
  },
  onRemove: id => evt => {
    evt.preventDefault();
    actions.removeFromRandomGifList(id);
  }
};
