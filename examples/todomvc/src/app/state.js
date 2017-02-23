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

  state.filter = model.route.substring(2);
  state.allSelected = state.filter === "";
  state.activeSelected = state.filter === "active";
  state.completedSelected = state.filter === "completed";

  const filterBy = (state.filter !== "") ?
    todo => (!!todo.completed) === state.completedSelected
    : () => true;

  state.filteredTodos = model.todos.filter(filterBy);
  state.allCompleted = allCompleted(state.filteredTodos);

  const notCompleted = function(todo) { return !todo.completed; };
  const itemsLeft = state.filteredTodos.filter(notCompleted).length;
  state.itemsLeftText = state.filteredTodos.length > 0 ?
    (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
  state.clearCompleted = (state.filteredTodos.length - itemsLeft) > 0;

  return state;
};
