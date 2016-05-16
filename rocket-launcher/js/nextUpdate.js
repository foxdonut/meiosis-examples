(function(ref) {
  ref.nextAction = function(model, update, actions) {
    if (ref.state.counting(model)) {
      if (model.counter > 0) {
        actions.decrement(model.counter);
      }
      else if (model.counter === 0) {
        actions.launch();
      }
    }
  };
})(window);
