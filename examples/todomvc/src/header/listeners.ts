export const createListeners = (updates: any, events: any) => {
  events.onSaveNewTodo.map(updates.saveNewTodo);
};
