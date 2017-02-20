import flyd from "flyd";

export const actions = {
  deleteTodo: flyd.stream(),
  editTodo: flyd.stream(),
  setCompleted: flyd.stream()
};

export const intents = {
  deleteTodo: todoId => () => actions.deleteTodo(todoId),
  editTodo: todo => () => actions.editTodo(todo),
  toggleTodo: todoId => evt => actions.setCompleted({ todoId, completed: evt.target.checked })
};
