/*global meiosisVanillaJs, window*/
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  ref.ready = function(actions) {
    meiosisVanillaJs.delegate(document.body, "input.new-todo", "keypress", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    });

    meiosisVanillaJs.delegate(document.body, "input.toggle", "change", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      var completed = evt.target.checked;
      actions.setCompleted(todoId, completed);
    });

    meiosisVanillaJs.delegate(document.body, ".view label", "dblclick", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.editTodo(todoId);
    });

    meiosisVanillaJs.delegate(document.body, "input.edit", "keyup", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);

      if (evt.keyCode === ESCAPE_KEY) {
        actions.cancelEdit(todoId);
      }
      else if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value, todoId);
      }
    });

    meiosisVanillaJs.delegate(document.body, "input.edit", "blur", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.saveTodo(evt.target.value, todoId);
    });

    meiosisVanillaJs.delegate(document.body, "button.destroy", "click", function(evt) {
      var todoId = parseInt(evt.target.dataset.id, 10);
      actions.deleteTodoId(todoId);
    });

    document.write("<div id='tracer' style='position: fixed; top: 0px; right: 0px;'></div>");

    /*
    // select the target node
    var target = document.querySelector("body");

    // create an observer instance
    var observer = new MutationObserver(function(_mutations) {
      var input = document.querySelector("input.edit");

      if (input) {
        input.focus();
        input.selectionStart = input.value.length;
      }
    });

    // configuration of the observer:
    var config = { attributes: false, childList: true, characterData: false };

    // pass in the target node, as well as the observer options
    observer.observe(target, config);

    // later, you can stop observing
    //observer.disconnect();
    */
  };
})(window);
