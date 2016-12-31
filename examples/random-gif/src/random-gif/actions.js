import * as C from "./constants";

export const actions = (propose, id, ajax) => ({
  editTag: tag => propose({ type: C.GIF_TAG_EDIT, id, tag }),
  newGif: tag => {
    propose({ type: C.GIF_NEW_START, id, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, id, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, id, error }));
  }
});
