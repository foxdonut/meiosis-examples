import * as model from "./model";
import * as actions from "./actions";

export const randomGif = {
  ...model,
  ...actions
};

export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);