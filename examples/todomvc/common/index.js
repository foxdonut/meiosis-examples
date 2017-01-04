import { run } from "meiosis";
import { todoStorage } from "./store";

export function startApp() {
  const initial = {
    editTodo: {},
    filter: "all",
    newTodo: "",
    todos: todoStorage.loadAll()
  };

  const receive = (model, proposal) => {
    return model;
  };

  const state = model => {
    const appState = JSON.parse(JSON.stringify(model));

    appState.filteredTodos = appState.todos;

    return appState;
  };

  return run({
    initial,
    scanner: { model: receive },
    mappers: [
      { state }
    ]
  });
}
