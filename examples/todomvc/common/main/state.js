/*global window*/
(function(ref) {
  ref.main = ref.main || {};

  ref.main.state = {
    allCompleted: function(model) {
      var result = true;

      for (var i = 0, t = model.filteredTodos.length; i < t; i++) {
        if (!model.filteredTodos[i].completed) {
          result = false;
          break;
        }
      }
      return result;
    }
  };
})(window);
