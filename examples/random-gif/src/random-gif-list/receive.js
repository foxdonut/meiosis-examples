import uuid from "uuid";
import * as C from "./constants";
import { component as randomGif } from "../random-gif";

export const receive = (model, proposal) => {
  if (proposal.type === C.GIF_LIST_ADD) {
    const id = uuid.v1();
    model.randomGifIds.push(id);
    model.randomGifsById[id] = randomGif.initialModel({});
  }
  else if (proposal.type === C.GIF_LIST_REMOVE) {
    const id = proposal.id;
    delete model.randomGifsById[id];
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  }
  else {
    model.randomGifIds.forEach(id => randomGif.receive(model.randomGifsById[id], proposal, id));
  }
  return model;
};
