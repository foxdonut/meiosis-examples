import * as _ from "lodash";
import { Model, Todo, UpdateFunction } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  editingNewTodo: (title: string) =>
    update((model: Model) => _.set(model, "newTodo", title)),

  saveNewTodo: (todo: Todo) =>
    update((model: Model) => {
      model.todosById[todo.id] = todo;
      model.todoIds.push(todo.id);
      model.newTodo = "";
      return model;
    })
});
