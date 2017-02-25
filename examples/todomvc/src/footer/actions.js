import flyd from "flyd";

export const actions = {
  clearCompleted: flyd.stream()
};

export const intents = {
  clearCompleted: () => actions.clearCompleted(true)
};
