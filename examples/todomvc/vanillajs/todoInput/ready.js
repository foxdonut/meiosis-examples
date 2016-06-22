/*global meiosisVanillaJs, window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  var renderer = meiosisVanillaJs.renderer;
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var root = document.getElementById("app");

  ref.todoInput.ready = function(actions) {
    renderer.delegate(root, "input.edit", "keyup", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);

      if (evt.keyCode === ESCAPE_KEY) {
        actions.cancelEdit(todoId);
      }
      else if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value, todoId);
      }
    });

    renderer.delegate(root, "input.edit", "blur", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.saveTodo(evt.target.value, todoId);
    });
  };
})(window);
