import { actions } from "./actions";
import { todoStorage } from "../app/store";

export const modelChanges = actions.setAllCompleted.map(completed => model => {
  model.todos = todoStorage.setAllCompleted(completed);
  return model;
});
