import { Model, Todo } from "../util";

export const state = {
  editing: (model: Model, todo: Todo) => (todo.id === model.editTodo.id)
};
