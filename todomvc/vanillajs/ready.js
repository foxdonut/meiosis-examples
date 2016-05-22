/*global meiosisVanillaJs, window*/
(function(ref) {
  var renderer = meiosisVanillaJs.renderer;
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var root = document.getElementById("app");

  ref.ready = function(actions) {
    renderer.delegate(root, "input.new-todo", "keypress", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.keyCode, evt.target.value);
      }
    });

    renderer.delegate(root, "input.toggle", "change", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    renderer.delegate(root, ".view label", "dblclick", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.editTodo(todoId);
    });

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

    renderer.delegate(root, "button.destroy", "click", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });

    renderer.delegate(root, "button.clear-completed", "click", function() {
      actions.clearCompleted();
    });

    renderer.on(window, "hashchange", function() {
      var route = document.location.hash.split("/")[1] || " ";
      actions.filter(route);
    });
  };
})(window);
