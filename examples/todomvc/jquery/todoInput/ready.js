/*global $, window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var $root = $(document.getElementById("app"));

  ref.todoInput.ready = function(actions) {
    $root.on("keyup", "input.edit", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);

      if (evt.keyCode === ESCAPE_KEY) {
        actions.cancelEdit(todoId);
      }
      else if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value, todoId);
      }
    });

    $root.on("blur", "input.edit", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.saveTodo(evt.target.value, todoId);
    });
  };
})(window);
