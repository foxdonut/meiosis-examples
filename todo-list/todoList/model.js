import { merge } from "ramda";

const createModel = pubsub => {
  let model = {
    todos: [],
    message: "Initializing..."
  };

  const next = data => {
    model = merge(model, data);
    pubsub.broadcast(model);
  };

  return {model, next};
};

export { createModel };
