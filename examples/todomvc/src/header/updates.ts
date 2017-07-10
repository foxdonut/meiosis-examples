import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

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
