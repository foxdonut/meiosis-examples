/*global document, window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.postRender = function(_view) {
    var input = document.getElementById("app").querySelector("input.edit");

    if (input) {
      input.focus();
      input.selectionStart = input.value.length;
    }
  };
})(window);
