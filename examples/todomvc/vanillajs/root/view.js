/*global window */
(function(ref) {
  var info = "<footer class='info'>" +
    "  <p>Double-click to edit a todo</p>" +
    "  <p>Meiosis - VanillaJs - Created by <a href='http://twitter.com/foxdonut00'>foxdonut00</a></p>" +
    "  <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>" +
    "</footer>";

  ref.root = ref.root || {};

  ref.root.view = function(todoapp) {
    return todoapp + info;
  };
})(window);
