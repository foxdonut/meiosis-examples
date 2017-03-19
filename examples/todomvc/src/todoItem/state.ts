import { Model, Todo } from "../util";

export const state = {
  editing: function(model: Model, todo: Todo) {
    return todo.id === model.editTodo.id;
  }
};
