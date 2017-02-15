/*global flyd, window*/
(function(ref) {
  ref.actions = {
    start: flyd.stream(),
    updateCounter: flyd.stream(),
    decrement: function(counterValue) {
      setTimeout(function() {
        ref.actions.updateCounter(counterValue - 1);
      }, 1000);
    },
    launch: flyd.stream(),
    abort: flyd.stream()
  };
})(window);
