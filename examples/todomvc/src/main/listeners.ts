export const createListeners = (updates: any, events: any) => {
  events.onDisplayTodos.map(updates.displayTodos);
  events.onUpdateTodo.map(updates.updateTodo);
};
