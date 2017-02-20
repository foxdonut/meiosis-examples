import { ItemAction } from "./actions";

export const createItemReceive = todoStorage => (model, proposal) => {
  ItemAction.case({
    SetCompleted: function(todoId, completed) {
      model.todos = todoStorage.setCompleted(todoId, completed);
    },
    EditTodo: function(todo) {
      model.editTodo = todo;
    },
    DeleteTodo: function(todoId) {
      model.todos = todoStorage.deleteTodoId(todoId);
    }
  }, proposal);

  return model;
};
