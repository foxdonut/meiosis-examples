import { initialModel, modelChanges, newGifSuccessAction } from "./model";

export const randomGif = {
  initialModel,
  modelChanges,
  newGifSuccessAction
};

export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);