const allCompleted = function(state) {
  let result = true;

  for (let i = 0, t = state.todoIds.length; i < t; i++) {
    if (!state.todosById[state.todoIds[i]].completed) {
      result = false;
      break;
    }
  }
  return result;
};

export const appState = model => {
  const state = JSON.parse(JSON.stringify(model));

  state.allSelected = state.route === "";
  state.activeSelected = state.route === "active";
  state.completedSelected = state.route === "completed";

  state.allCompleted = allCompleted(state);

  const notCompleted = todoId => !state.todosById[todoId].completed;
  const itemsLeft = state.todoIds.filter(notCompleted).length;

  state.itemsLeftText = state.todoIds.length > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";

  state.clearCompletedVisible = (state.todoIds.length - itemsLeft) > 0;

  return state;
};
