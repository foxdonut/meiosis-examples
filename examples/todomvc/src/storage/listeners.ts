import { todoStorage } from "../util/todo-storage";

export const createListeners = (events: any) => {
  events.onSetCompleted.map((data: any) => {
    todoStorage.setCompleted(data.todoId, data.completed).then(() => events.setCompleted(data));
  });
};
