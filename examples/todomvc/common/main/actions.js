/*global window*/
(function(ref) {
  ref.main = ref.main || {};

  ref.main.actions = function(sendUpdate) {
    var actions = {
      setAllCompleted: function(completed) {
        sendUpdate({ setAllCompleted: { completed: completed }});
      }
    };

    actions.events = {
      onToggleAllTodos: function(evt) {
        actions.setAllCompleted(evt.target.checked);
      }
    };

    return actions;
  };
})(window);
