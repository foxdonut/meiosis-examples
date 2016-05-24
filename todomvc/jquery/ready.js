/*global $, window*/
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;
  var $root = $(document.getElementById("app"));

  ref.ready = function(actions) {
    $root.on("keypress", "input.new-todo", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    });

    $root.on("change", "input.toggle", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    $root.on("dblclick", ".view label", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var title = evt.target.innerHTML;
      actions.editTodo(title, todoId);
    });

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

    $root.on("click", "button.destroy", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });

    $root.on("click", "button.clear-completed", function() {
      actions.clearCompleted();
    });
  };
})(window);
