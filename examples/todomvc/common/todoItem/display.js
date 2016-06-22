/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var getTodoClasses = function(state, model, todo) {
    return ref.classNames({
      "completed": todo.completed,
      "editing": state.editing(model, todo)
    });
  };

  ref.todoItem.display = function(state, view) {
    return function(model, actions) {
      return function(todo) {
        var todoClasses = getTodoClasses(state, model, todo);
        return view({model: model, todo: todo, todoClasses: todoClasses}, actions);
      };
    };
  };
})(window);
