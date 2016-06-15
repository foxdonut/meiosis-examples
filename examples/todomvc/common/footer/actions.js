/*global window*/
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.actions = function(sendUpdate) {
    var actions = {
      clearCompleted: function() {
        sendUpdate({ clearCompleted: true });
      },
      filter: function(by) {
        sendUpdate({ filter: by });
      }
    };

    actions.events = {
      onClearCompleted: function(_evt) {
        actions.clearCompleted();
      }
    };

    return actions;
  };
})(window);
