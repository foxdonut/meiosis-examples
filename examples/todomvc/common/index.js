import { run } from "meiosis";

export function startApp() {
  const initial = {
    editTodo: {},
    filter: "all",
    newTodo: "",
    todos: []
  };

  const receive = (model, proposal) => {
    return model;
  };

  const state = model => {
    const appState = JSON.parse(JSON.stringify(model));

    appState.filteredTodos = [];

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
