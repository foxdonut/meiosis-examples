/*global $, window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var $root = $(document.getElementById("app"));

  ref.todoItem.ready = function(actions) {
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

    $root.on("click", "button.destroy", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });
  };
})(window);
