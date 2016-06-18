/*global m */
(function(ref) {
  ref.todoapp = ref.todoapp || {};

  ref.todoapp.view = function(header, main, footer) {
    return m("section.todoapp", [header, main, footer]);
  };
})(window);
