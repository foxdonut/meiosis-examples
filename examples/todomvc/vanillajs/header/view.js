/*global window */
(function(ref) {
  ref.header = ref.header || {};

  ref.header.view = function() {
    return "  <header class='header'>" +
      "    <h1>todos</h1>" +
      "    <input class='new-todo' placeholder='What needs to be done?' autofocus>" +
      "  </header>";
  };
})(window);
