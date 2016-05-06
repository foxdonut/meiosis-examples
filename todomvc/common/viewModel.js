/*global window*/
(function(ref) {
  ref.viewModel = function(createComponent) {
    createComponent({
      receiveUpdate: function(model, update) {
        if (update.editTodoId) {
          for (var i = 0, t = model.todos.length; i < t; i++) {
            var todo = model.todos[i];

            if (todo.id === update.editTodoId) {
              todo.editing = update.editing;
              break;
            }
          }
        }
        return model;
      }
    });
  };
})(window);
