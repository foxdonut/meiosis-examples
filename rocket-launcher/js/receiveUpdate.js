/*global window*/
(function(ref) {
  ref.receiveUpdate = function(model, update) {
    if (ref.state.counting(model)) {
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
    else if (ref.state.ready(model)) {
      model.started = update.started || false;
    }

    return model;
  };
})(window);
