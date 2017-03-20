import { Model } from "../util";

const allCompleted = function(state: any) {
  let result = true;

  for (let i = 0, t = state.todoIds.length; i < t; i++) {
    if (!state.todosById[state.todoIds[i]].completed) {
      result = false;
      break;
    }
  }
  return result;
};

export const state = (model: Model) => {
  const state = JSON.parse(JSON.stringify(model));

  state.allSelected = model.filter === "all";
  state.activeSelected = model.filter === "active";
  state.completedSelected = model.filter === "completed";

  state.allCompleted = allCompleted(state);

  const notCompleted = (todoId: string) => !state.todosById[todoId].completed;
  const itemsLeft = state.todoIds.filter(notCompleted).length;

  state.itemsLeftText = state.todoIds.length > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";

  state.clearCompletedVisible = (state.todoIds.length - itemsLeft) > 0;

  return state;
};
