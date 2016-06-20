/*global $, window*/
(function(ref) {
  ref.header = ref.header || {};

  var ENTER_KEY = 13;
  var $root = $(document.getElementById("app"));

  ref.header.ready = function(actions) {
    $root.on("keypress", "input.new-todo", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveNewTodo(evt.target.value);
      }
    });
  };
})(window);
