import { propose } from "meiosis";
import * as C from "./constants";

export const createActions = ajax => ({
  editTag: (id, tag) => propose({ type: C.GIF_TAG_EDIT, id, tag }),
  newGif: (id, tag) => {
    propose({ type: C.GIF_NEW_START, id, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, id, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, id, error }));
  }
});

export const createHandlers = actions => ({
  onEditTag: id => evt => {
    evt.preventDefault();
    actions.editTag(id, evt.target.value);
  },
  onNewGif: (id, tag) => evt => {
    evt.preventDefault();
    actions.newGif(id, tag);
  }
});
