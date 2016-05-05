/*global meiosisVanillaJs, window*/
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  ref.ready = function(actions) {
    meiosisVanillaJs.delegate(document.body, "input.new-todo", "keypress", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
      else if (evt.keyCode === ESCAPE_KEY) {
        // TODO
      }
    });

    meiosisVanillaJs.delegate(document.body, "input.toggle", "change", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    meiosisVanillaJs.delegate(document.body, "button.destroy", "click", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });
  };
})(window);
