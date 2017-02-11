/*global meiosis, window*/
(function(ref) {
  ref.COUNTER_MAX = 10;

  ref.initialModel = {
    counter: ref.COUNTER_MAX,
    started: false,
    launched: false,
    aborted: false
  };

  ref.modelChanges = function(state, actions) {
    var start = meiosis.map(function() {
      return function(model) {
        model.started = true;
        return model;
      };
    }, actions.start);

    var counter = meiosis.map(function(counterValue) {
      return function(model) {
        model.counter = counterValue;
        return model;
      };
    }, actions.counter);

    var launch = meiosis.map(function() {
      return function(model) {
        model.launched = true;
        return model;
      };
    }, actions.launch);

    var abort = meiosis.map(function() {
      return function(model) {
        model.aborted = true;
        return model;
      };
    }, actions.abort);

/*
    return function(model) {
      if (state.counting(model)) {
        if (model.counter === 0) {
          model.launched = proposal.launched || false;
        }
        else {
          model.aborted = proposal.aborted || false;
          if (proposal.counter !== undefined) {
            model.counter = proposal.counter;
          }
        }
      }
      else if (state.ready(model)) {
        model.started = proposal.started || false;
      }

      return model;
    };
*/
    return meiosis.mergeAll([
      start,
      counter,
      launch,
      abort
    ]);
  };
})(window);
