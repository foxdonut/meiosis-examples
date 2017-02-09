import { initialModel, modelChanges } from "./model";

export const randomGif = {
  initialModel,
  modelChanges
};

export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);