export const GIF_TAG_EDIT = "GIF_TAG_EDIT";
export const GIF_NEW_START = "GIF_NEW_START";
export const GIF_NEW_SUCCESS = "GIF_NEW_SUCCESS";
export const GIF_NEW_ERROR = "GIF_NEW_ERROR";
export const GIF_NEW_URL = "https://api.giphy.com/v1/gifs/random";

export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);
