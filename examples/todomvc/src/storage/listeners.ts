import { Todo, todoStorage } from "../util";

export const createListeners = (events: any) => {
  events.onClearCompleted.map(() => {
    todoStorage.clearCompleted().then(events.displayTodos);
  });

  events.onDeleteTodoId.map((todoId: string) => {
    todoStorage.deleteTodoId(todoId).then(() => events.deleteTodoId(todoId));
  });

  events.onFilter.map((filterBy: string) => {
    todoStorage.filter(filterBy).then(events.displayTodos);
  });

  events.onLoadAll.map(() => {
    todoStorage.loadAll().then(events.displayTodos);
  });

  events.onSaveNewTodo.map((todo: Todo) => {
    todoStorage.saveTodo(todo).then(events.saveNewTodo);
  });

  events.onSaveTodo.map((todo: Todo) => {
    todoStorage.saveTodo(todo).then(events.saveTodo);
  });

  events.onSetCompleted.map((data: any) => {
    todoStorage.setCompleted(data.todoId, data.completed).then(() => events.setCompleted(data));
  });
};
