import { map } from "meiosis";
import uuid from "uuid";
import { randomGifActions } from "../view/common/random-gif";

export const initialModel = id => {
  id = id || uuid.v1();

  return {
    id,
    isLoading: false,
    isError: false,
    tag: "",
    image_url: ""
  };
};

const editTag = map(({ id, tag }) => model => {
  if (id === model.id) {
    model.tag = tag;
  }
  return model;
}, randomGifActions.editTag);

/*
export const createActions = ({ ajax, randomGifIntents, propose }) => {
  on(({ id, tag }) => propose({ type: C.GIF_TAG_EDIT, id, tag }), randomGifIntents.editTag);

  on(({ id, tag }) => {
    propose({ type: C.GIF_NEW_START, id, tag });
    ajax.getJSON({ url: C.GIF_NEW_URL, params: { api_key: "dc6zaTOxFJmzC", tag }}).
      then(response => propose({ type: C.GIF_NEW_SUCCESS, id, data: response.data })).
      catch(error => propose({ type: C.GIF_NEW_ERROR, id, error }));
  }, randomGifIntents.newGif);
};

export function receive(model, proposal) {
  if (proposal.id === model.id) {
    if (proposal.type === C.GIF_TAG_EDIT) {
      model.tag = proposal.tag;
    }
    else if (proposal.type === C.GIF_NEW_START) {
      model.isLoading = true;
      model.isError = false;
    }
    else if (proposal.type === C.GIF_NEW_SUCCESS) {
      model.isLoading = false;
      model.isError = false;
      model.image_url = proposal.data.image_url;
    }
    else if (proposal.type === C.GIF_NEW_ERROR) {
      model.isLoading = false;
      model.isError = true;
    }
  }
  return model;
}
*/

export const modelChanges = editTag;