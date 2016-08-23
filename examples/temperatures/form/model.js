import objectPath from "object-path";

const initialModel = model => {
  objectPath.set(model, "store.saved", "");
  objectPath.set(model, "store.errors", {});
  return model;
};

export default initialModel;
