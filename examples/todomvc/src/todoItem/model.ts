import { Model, Todo } from "../util";
import { actions } from "./actions";

const setCompleted = actions.setCompleted.map(({ todoId, completed }: { todoId: string, completed: boolean }) => (model: Model) => {
  model.todosById[todoId].completed = completed;
  return model;
});

const editTodo = actions.editTodo.map((todo: Todo) => (model: Model) => {
  model.editTodo = todo;
  return model;
});

const deleteTodo = actions.deleteTodo.map((todoId: string) => (model: Model) => {
  delete model.todosById[todoId];
  model.todoIds.splice(model.todoIds.indexOf(todoId), 1);
  return model;
});
