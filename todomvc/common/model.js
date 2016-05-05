/*global window*/
(function(ref) {
  ref.initialModel = { todos: ref.todoStorage.loadAll() };
})(window);
