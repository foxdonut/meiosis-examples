import { HeaderAction } from "./actions";

export const createHeaderReceive = todoStorage => (model, proposal) => {
  HeaderAction.case({
    NewTodo: function(title) {
      model.newTodo = title;
    },
    SaveNewTodo: function(title) {
      title = title.trim();

      if (title) {
        model.todos = todoStorage.saveTodo({title: title});
        model.newTodo = "";
      }
    },
    ClearNewTodo: function() {
      model.newTodo = "";
    }
  }, proposal);

  return model;
};
