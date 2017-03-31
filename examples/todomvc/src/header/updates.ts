import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
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
