export const createActions = (update, events) => ({
  editTodo: todo => () => events.editTodo(todo),
  deleteTodo: todo => () => events.deleteTodo(todo.id)
});
