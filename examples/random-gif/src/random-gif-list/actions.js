import * as C from "./constants";

export const createActions = ({ propose }) => ({
  onAdd: evt => {
    evt.preventDefault();
    propose({ type: C.GIF_LIST_ADD });
  },
  onRemove: id => evt => {
    evt.preventDefault();
    propose({ type: C.GIF_LIST_REMOVE, id });
  }
});
