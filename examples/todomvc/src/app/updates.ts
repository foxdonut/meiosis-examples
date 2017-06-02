import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

const displayTodosFn = (todos: Todo[]) => (model: Model) => {
  model.todoIds = [];
  model.todosById = {};

  todos.forEach((todo: Todo) => {
    model.todoIds.push(todo.id);
    model.todosById[todo.id] = todo;
  });

  return model;
};

const filterFn = (by: string) => (model: Model) => {
  model.filterBy = by;
  return model;
};

export const createUpdates = (update: UpdateFunction) => ({
  update,
  displayTodosFn,
  displayTodos: (todos: Todo[]) => update(displayTodosFn(todos)),
  filterFn,
  filter: (by: string) => update(filterFn(by))
});
