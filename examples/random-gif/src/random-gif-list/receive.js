import uuid from "node-uuid";
import * as C from "./constants";
import { component as randomGifComponent } from "../random-gif";

export const receive = randomGifComponents => (model, proposal) => {
  if (proposal.type === C.GIF_LIST_ADD) {
    const id = uuid.v1();
    model.randomGifIds.push(id);

    const randomGif = randomGifComponent(id);
    randomGifComponents[id] = randomGif;
    model[id] = randomGif.initialModel({});
  }
  else if (proposal.type === C.GIF_LIST_REMOVE) {
    const id = proposal.id;
    delete model[id];
    delete randomGifComponents[id];
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  }
  else {
    const id = proposal.id;
    if (model[id]) {
      model[id] = randomGifComponents[id].receive(model[id], proposal);
    }
  }
  return model;
};
