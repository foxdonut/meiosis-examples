import uuid from "uuid";

export const randomGif = {
  initialModel: id => {
    id = id || uuid.v1();

    return {
      id,
      isLoading: false,
      isError: false,
      tag: "",
      image_url: ""
    };
  }
};

export const imgsrc = model => model.isLoading ? "/examples/random-gif/images/loading.gif" : (
  model.isError ? "/examples/random-gif/images/error.png" : model.image_url
);
