/*global window*/
(function(ref) {
  ref.initialModel = {
    todos: ref.todoStorage.loadAll(),
    newTodo: "",
    filter: "all"
  };
})(window);
