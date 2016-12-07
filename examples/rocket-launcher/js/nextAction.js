(function(ref) {
  ref.nextAction = function(state) {
    return function(context) {
      if (state.counting(context.model)) {
        if (context.model.counter > 0) {
          context.actions.decrement(context.model.counter);
        }
        else if (context.model.counter === 0) {
          context.actions.launch();
        }
      }
    };
  };
})(window);
