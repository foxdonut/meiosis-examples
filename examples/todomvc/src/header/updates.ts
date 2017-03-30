import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import * as _ from "lodash";
import { Model, Todo } from "../util";

export const createUpdates = (update: Function) => ({
  updateNewTodo: (title: string) =>
    update((model: Model) => _.set(model, "newTodo", title)),

  updateSavedTodo: (todo: Todo) =>
    update((model: Model) => {
      model.todosById[todo.id] = todo;
      model.todoIds.push(todo.id);
      model.newTodo = "";
      return model;
    })
});
