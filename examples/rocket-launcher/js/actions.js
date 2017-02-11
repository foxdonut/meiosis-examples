/*global meiosis, window*/
(function(ref) {
  ref.actions = {
    start: meiosis.stream(),
    counter: meiosis.stream(),
    decrement: function(counterValue) {
      setTimeout(function() {
        ref.actions.counter(counterValue);
      }, 1000);
    },
    launch: meiosis.stream(),
    abort: meiosis.stream()
  };
})(window);
