(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.postRender = function(_view) {
    var input = document.getElementById("app").querySelector("input.edit");

    if (input) {
      input.focus();
      input.selectionStart = input.value.length;
    }
  };
})(window);
