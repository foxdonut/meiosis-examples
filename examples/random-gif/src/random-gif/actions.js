import { on } from "meiosis";
import * as C from "./constants";
import { intents } from "../view/common/random-gif";

export const createActions = ({ ajax, propose }) => {
  on(({ id, tag }) => propose({ type: C.GIF_TAG_EDIT, id, tag }), intents.editTag);

  on(({ id, tag }) => {
    propose({ type: C.GIF_NEW_START, id, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, id, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, id, error }));
  }, intents.newGif);
};
