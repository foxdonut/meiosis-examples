import { EditAction } from "./actions";

export const createEditReceive = todoStorage => (model, proposal) => {
  EditAction.case({
    EditingTodo: function(todo) {
      model.editTodo = todo;
    },
    SaveTodo: function(todo) {
      const editing = todo.id && (todo.id === model.editTodo.id);
      todo.title = todo.title.trim();

      if (editing && todo.title) {
        model.todos = todoStorage.saveTodo(todo);
        model.editTodo = { };
      }
    },
    ClearEdit: function() {
      model.editTodo = { };
    }
  }, proposal);

  return model;
};
