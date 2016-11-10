import * as C from "./constants";

export const actions = ajax => propose => ({
  editTag: tag => propose({ type: C.GIF_TAG_EDIT, tag }),
  newGif: tag => {
    propose({ type: C.GIF_NEW_START, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, error }));
  }
});
