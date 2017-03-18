export const state = {
  editing: function(model, todo) {
    return todo.id === model.editTodo.id;
  }
};
