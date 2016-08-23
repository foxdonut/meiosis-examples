import objectPath from "object-path";

const initialModel = model => {
  objectPath.set(model, "store.entry.value", "");
  return model;
};

export default initialModel;
