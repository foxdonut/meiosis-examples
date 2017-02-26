import crossroads from "crossroads";
import * as actions from "./actions";

/*
  state.allSelected = state.filter === "";
  state.activeSelected = state.filter === "active";
  state.completedSelected = state.filter === "completed";

  const filterBy = (state.filter !== "") ?
    todo => (!!todo.completed) === state.completedSelected
    : () => true;

  state.filteredTodos = model.todos.filter(filterBy);
*/
export const addRoutes = () => {
  crossroads.addRoute("/", () => {
  }, 1);

  crossroads.addRoute("/active", () => {
  }, 1);

  crossroads.addRoute("/completed", () => {
  }, 1);
};

export const footer = {
  ...actions,
  addRoutes
};
