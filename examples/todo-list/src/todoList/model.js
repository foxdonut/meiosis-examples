export const model = () => ({
  todos: [],
  message: "Initializing..."
});

/*
const deleteTodoStart = actions.deleteTodoStart.map(() => model =>
  assoc("message", "Deleting, please wait...", model));

const deleteTodoSuccess = actions.deleteTodoSuccess.map(todoId => model =>
  ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }));

const deleteTodoFailure = actions.deleteTodoFailure.map(() => model =>
  ({ todos: model.todos, message: "An error occured when deleting a Todo." }));

const saveTodoStart = todoForm.actions.saveTodoStart.map(() => model =>
  assoc("message", "Saving, please wait...", model));

const saveTodoFailure = todoForm.actions.saveTodoFailure.map(() => model =>
  ({ todos: model.todos, message: "An error occured when saving a Todo." }));
*/
