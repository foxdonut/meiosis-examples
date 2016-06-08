/*global window*/
(function(ref) {
  ref.receiveUpdate = function(state) {
    return function(model, update) {
      if (state.counting(model)) {
        if (model.counter === 0) {
          model.launched = update.launched || false;
        }
        else {
          model.aborted = update.aborted || false;
          if (update.counter !== undefined) {
            model.counter = update.counter;
          }
        }
      }
      else if (state.ready(model)) {
        model.started = update.started || false;
      }

      return model;
    };
  };
})(window);
