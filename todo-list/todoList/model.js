import { merge } from "ramda";

let model = {
  todos: [],
  message: "Initializing..."
};

const next = data => {
  model = merge(model, data);
  return model;
};

export { model, next };
