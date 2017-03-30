/*global window*/
(function(ref) {
  ref.actions = function(updates) {
    return {
      start: function(evt) {
        evt.preventDefault();
        updates.start();
      },
      decrement: function() {
        setTimeout(function() {
          updates.addToCounter(-1);
        }, 1000);
      },
      abort: function(evt) {
        evt.preventDefault();
        updates.abort();
      },
      launch: updates.launch
    };
  };
})(window);
