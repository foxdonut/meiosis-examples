const allCompleted = function(filteredTodos) {
  let result = true;

  for (let i = 0, t = filteredTodos.length; i < t; i++) {
    if (!filteredTodos[i].completed) {
      result = false;
      break;
    }
  }
  return result;
};

export const appState = model => {
  const state = JSON.parse(JSON.stringify(model));
  const by = model.filter;
  const completed = by === "completed";

  const filterBy = (by && by !== "all") ?
    todo => (!!todo.completed) === completed
    : () => true;

  state.filteredTodos = model.todos.filter(filterBy);
  state.allCompleted = allCompleted(state.filteredTodos);

  const notCompleted = function(todo) { return !todo.completed; };
  const itemsLeft = state.filteredTodos.filter(notCompleted).length;
  state.itemsLeftText = state.filteredTodos.length > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
  state.clearCompleted = (state.filteredTodos.length - itemsLeft) > 0;

  state.allSelected = model.filter === "all";
  state.activeSelected = model.filter === "active";
  state.completedSelected = model.filter === "completed";

  return state;
};
