/*global window*/
(function(ref) {
  var getTodoClasses = function(state, model, todo) {
    return ref.classNames({
      "completed": todo.completed,
      "editing": state.editing(model, todo)
    });
  };

  ref.todoItemDisplay = function(state, view) {
    return function(model, actions) {
      return function(todo) {
        var todoClasses = getTodoClasses(state, model, todo);
        var events = ref.events(actions);
        var input = state.editing ? view.todoInput(model.editTodo, events) : null;
        return view.todoItem({todo: todo, todoClasses: todoClasses}, events, input);
      };
    };
  };
})(window);
