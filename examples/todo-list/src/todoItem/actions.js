import flyd from "flyd";

export const actions = {
  editTodo: flyd.stream(),
  deleteTodo: flyd.stream()
};

export const intents = {
  editTodo: todo => () => actions.editTodo(todo),
  deleteTodo: todo => () => actions.deleteTodo(todo.id)
};
