import objectPath from "object-path";

const initialModel = model => {
  objectPath.set(model, "store.date.value", "");
  return model;
};

export default initialModel;
