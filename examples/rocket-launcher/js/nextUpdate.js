(function(ref) {
  ref.nextUpdate = function(state) {
    return function(model, update, actions) {
      if (state.counting(model)) {
        if (model.counter > 0) {
          actions.decrement(model.counter);
        }
        else if (model.counter === 0) {
          actions.launch();
        }
      }
    };
  };
})(window);
