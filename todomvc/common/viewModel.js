/*global window*/
(function(ref) {
  ref.viewModel = function(createComponent) {
    createComponent({
      receiveUpdate: function(model, update) {
        for (var i = 0, t = model.todos.length; i < t; i++) {
          var todo = model.todos[i];
          model.meta[String(todo.id)] = { editing: (todo.id === update.editTodoId ? update.editing : false) };
        }

        var by = model.filter;
        var completed = by === "completed";

        var filterBy = (by && by.length > 1) ? function(todo) {
          return (!!todo.completed) === completed;
        } :
        function() {
          return true;
        };
        model.todos = model.todos.filter(filterBy);

        return model;
      }
    });
  };
})(window);
