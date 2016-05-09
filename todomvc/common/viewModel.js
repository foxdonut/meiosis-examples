/*global window*/
(function(ref) {
  ref.viewModel = function(createComponent) {
    createComponent({
      receiveUpdate: function(model, update) {
        for (var i = 0, t = model.todos.length; i < t; i++) {
          var todo = model.todos[i];
          model.meta[String(todo.id)] = { editing: (todo.id === update.editTodoId ? update.editing : false) };
        }
        return model;
      }
    });
  };
})(window);
