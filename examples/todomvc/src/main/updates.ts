import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  displayTodos: (todos: Todo[]) => update((model: Model) => {
    model.todoIds = [];
    model.todosById = {};

    todos.forEach((todo: Todo) => {
      model.todoIds.push(todo.id);
      model.todosById[todo.id] = todo;
    });

    return model;
  })
});
