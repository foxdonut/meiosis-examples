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
        var input = state.editing(model, todo) ? view.todoInput(model.editTodo, actions.events) : view.noTodoInput();
        return view.todoItem({todo: todo, todoClasses: todoClasses}, input, actions.events);
      };
    };
  };
})(window);
