import * as C from "./constants";

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
