import { map, stream } from "meiosis";
import * as C from "./constants";

export const randomGifIntents = {
  editTag: stream(),
  newGif: stream()
};

export const createActions = ({ ajax, propose }) => {
  map(({ id, tag }) => propose({ type: C.GIF_TAG_EDIT, id, tag }), randomGifIntents.editTag);

  map(({ id, tag }) => {
    propose({ type: C.GIF_NEW_START, id, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, id, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, id, error }));
  }, randomGifIntents.newGif);
};
