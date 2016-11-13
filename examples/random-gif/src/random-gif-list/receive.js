import uuid from "node-uuid";
import * as C from "./constants";
import { config as randomGifConfig } from "../random-gif";

export const receive = randomGifConfigs => (model, proposal) => {
  if (proposal.type === C.GIF_LIST_ADD) {
    const id = uuid.v1();
    model.randomGifIds.push(id);

    const randomGif = randomGifConfig(id);
    randomGifConfigs[id] = randomGif;
    model[id] = randomGif.initialModel({});
  }
  else if (proposal.type === C.GIF_LIST_REMOVE) {
    const id = proposal.id;
    delete model[id];
    delete randomGifConfigs[id];
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
  }
  else {
    const id = proposal.id;
    if (model[id]) {
      model[id] = randomGifConfigs[id].receive(model[id], proposal);
    }
  }
  return model;
};
