/*global meiosisVanillaJs, window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var renderer = meiosisVanillaJs.renderer;
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var root = document.getElementById("app");

  ref.todoItem.ready = function(actions) {
    renderer.delegate(root, "input.toggle", "change", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    renderer.delegate(root, ".view label", "dblclick", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var title = evt.target.innerHTML;
      actions.editTodo(title, todoId);
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
  };
})(window);
