/*global meiosisVanillaJs, window*/
(function(ref) {
  ref.header = ref.header || {};

  var renderer = meiosisVanillaJs.renderer;
  var ENTER_KEY = 13;
  var root = document.getElementById("app");

  ref.header.ready = function(actions) {
    renderer.delegate(root, "input.new-todo", "keypress", function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveNewTodo(evt.target.value);
      }
    });
  };
})(window);
