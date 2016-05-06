(function(ref) {
  ref.postRender = function(_view) {
    var input = document.querySelector("input.edit");

    if (input) {
      input.focus();
      input.selectionStart = input.value.length;
    }
  };
})(window);
