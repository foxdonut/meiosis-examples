import uuid from "node-uuid";
import * as C from "./constants";
import { component as randomGifComponent } from "../random-gif";
import nestComponent from "../util/nest-component";

export const receive = randomGifComponents => (model, proposal) => {
  if (proposal.type === C.GIF_LIST_ADD) {
    const id = uuid.v1();
    model.randomGifIds.push(id);

    const randomGif = nestComponent(id)(randomGifComponent(id));
    randomGifComponents[id] = randomGif;
    //FIXME
    //model[id] = randomGif.initialModel({});
  }
  else if (proposal.type === C.GIF_LIST_REMOVE) {
    const id = proposal.id;
    delete model[id];
    delete randomGifComponents[id];
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  }
  return model;
};
