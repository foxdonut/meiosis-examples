import objectPath from "object-path";

const initialModel = model => {
  objectPath.set(model, "store.saved", "");
  return model;
};

export default initialModel;
