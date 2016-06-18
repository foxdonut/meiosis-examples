/*global window */
(function(ref) {
  ref.todoapp = ref.todoapp || {};

  ref.todoapp.view = function(header, main, footer) {
    return "<section class='todoapp'>" +
      header + main + footer +
    "</section>";
  };
})(window);
