/*global window*/
(function(ref) {
  ref.COUNTER_MAX = 10;

  ref.initialModel = {
    counter: ref.COUNTER_MAX,
    started: false,
    launched: false,
    aborted: false
  };

  ref.updates = function(update, state) {
    var start = function() {
      update(function(model) {
        model.started = true;
        return model;
      });
    };

    var addToCounter = function(amount) {
      update(function(model) {
        if (state.counting(model)) {
          model.counter = model.counter + amount;
        }
        return model;
      });
    };

    var launch = function() {
      update(function(model) {
        model.launched = true;
        return model;
      });
    };

    var abort = function() {
      update(function(model) {
        model.aborted = true;
        return model;
      });
    };

    return {
      start: start,
      addToCounter: addToCounter,
      launch: launch,
      abort: abort
    };
  };
})(window);
