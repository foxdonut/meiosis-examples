/*global flyd, meiosis, window*/
(function(ref) {
  ref.mergeIntoOne = meiosis.createMergeIntoOne(flyd);

  ref.COUNTER_MAX = 10;

  ref.initialModel = {
    counter: ref.COUNTER_MAX,
    started: false,
    launched: false,
    aborted: false
  };

  ref.modelChanges = function(state, actions) {
    var start = actions.start.map(function() {
      return function(model) {
        model.started = true;
        return model;
      };
    });

    var counter = actions.updateCounter.map(function(counterValue) {
      return function(model) {
        if (state.counting(model)) {
          model.counter = counterValue;
        }
        return model;
      };
    });

    var launch = actions.launch.map(function() {
      return function(model) {
        model.launched = true;
        return model;
      };
    });

    var abort = actions.abort.map(function() {
      return function(model) {
        model.aborted = true;
        return model;
      };
    });

    return ref.mergeIntoOne([
      start,
      counter,
      launch,
      abort
    ]);
  };
})(window);
