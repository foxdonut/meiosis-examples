import uuid from "uuid";

export const initialModel = id => {
  id = id || uuid.v1();

  return {
    id,
    isLoading: false,
    isError: false,
    tag: "",
    image_url: ""
  };
};
