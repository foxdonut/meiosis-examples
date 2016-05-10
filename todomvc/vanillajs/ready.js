/*global meiosisVanillaJs, window*/
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var root = document.getElementById("app");

  ref.ready = function(actions) {
    meiosisVanillaJs.delegate(root, "input.new-todo", "keypress", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    });

    meiosisVanillaJs.delegate(root, "input.toggle", "change", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    meiosisVanillaJs.delegate(root, ".view label", "dblclick", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.editTodo(todoId);
    });

    meiosisVanillaJs.delegate(root, "input.edit", "keyup", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);

      if (evt.keyCode === ESCAPE_KEY) {
        actions.cancelEdit(todoId);
      }
      else if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value, todoId);
      }
    });

    meiosisVanillaJs.delegate(root, "input.edit", "blur", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.saveTodo(evt.target.value, todoId);
    });

    meiosisVanillaJs.delegate(root, "button.destroy", "click", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });

    meiosisVanillaJs.delegate(root, "button.clear-completed", "click", function() {
      actions.clearCompleted();
    });

    meiosisVanillaJs.on(window, "hashchange", function() {
      var route = document.location.hash.split("/")[1] || " ";
      actions.filter(route);
    });
  };
})(window);
