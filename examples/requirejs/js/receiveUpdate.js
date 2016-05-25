/*global define*/
define([], function() {
  return function(model, update) {
    return { counter: model.counter + update.add };
  };
});
