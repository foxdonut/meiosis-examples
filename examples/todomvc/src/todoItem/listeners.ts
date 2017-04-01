export const createListeners = (updates: any, events: any) => {
  events.onDeleteTodoId.map(updates.deleteTodoId);
  events.onSetCompleted.map((data: any) => updates.setCompleted(data.todoId, data.completed));
};
