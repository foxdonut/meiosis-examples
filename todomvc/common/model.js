/*global window*/
(function(ref) {
  ref.initialModel = {
    todos: ref.todoStorage.loadAll(),
    newTodo: "",
    editTodo: {},
    filter: "all"
  };
})(window);
