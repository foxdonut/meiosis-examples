/*global window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.display = function(state, view) {
    return function(model, actions) {
      return state.editing(model.model, model.todo) ?
        view.todoInput(model.model.editTodo, actions) :
        view.noTodoInput();
    };
  };
})(window);
