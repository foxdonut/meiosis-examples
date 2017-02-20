import flyd from "flyd";

export const actions = {
  setAllCompleted: flyd.stream()
};

export const intents = {
  toggleAllTodos: evt => actions.setAllCompleted(evt.target.checked)
};
